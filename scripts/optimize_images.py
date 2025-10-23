#!/usr/bin/env python3
"""
Script para otimizar imagens do projeto Trilha Labs
Converte para WebP, redimensiona e comprime automaticamente
"""

import os
import sys
from PIL import Image
import argparse
from pathlib import Path

def optimize_image(input_path, output_path, max_width=None, max_height=None, quality=80, format='webp'):
    """
    Otimiza uma imagem individual
    """
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for WebP compatibility)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create a white background for transparent images
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if dimensions are specified
            if max_width or max_height:
                img.thumbnail((max_width or img.width, max_height or img.height), Image.Resampling.LANCZOS)
            
            # Save optimized image
            save_kwargs = {'optimize': True, 'quality': quality}
            if format.lower() == 'webp':
                save_kwargs['method'] = 6  # Best compression method for WebP
            
            img.save(output_path, format=format.upper(), **save_kwargs)
            
            # Get file sizes
            original_size = os.path.getsize(input_path)
            optimized_size = os.path.getsize(output_path)
            savings = ((original_size - optimized_size) / original_size) * 100
            
            print(f"✅ {input_path.name}")
            print(f"   Original: {original_size / 1024:.1f} KB")
            print(f"   Optimized: {optimized_size / 1024:.1f} KB")
            print(f"   Savings: {savings:.1f}%")
            print()
            
            return True
            
    except Exception as e:
        print(f"❌ Error processing {input_path}: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description='Optimize images for Trilha Labs project')
    parser.add_argument('--input-dir', default='public/images', help='Input directory')
    parser.add_argument('--output-dir', default='public/images/optimized', help='Output directory')
    parser.add_argument('--quality', type=int, default=80, help='Image quality (1-100)')
    parser.add_argument('--max-width', type=int, help='Maximum width in pixels')
    parser.add_argument('--max-height', type=int, help='Maximum height in pixels')
    parser.add_argument('--format', default='webp', choices=['webp', 'jpeg', 'png'], help='Output format')
    
    args = parser.parse_args()
    
    input_dir = Path(args.input_dir)
    output_dir = Path(args.output_dir)
    
    if not input_dir.exists():
        print(f"❌ Input directory {input_dir} does not exist")
        sys.exit(1)
    
    # Create output directory
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Supported image extensions
    supported_extensions = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.webp'}
    
    # Find all images
    image_files = []
    for ext in supported_extensions:
        image_files.extend(input_dir.glob(f'*{ext}'))
        image_files.extend(input_dir.glob(f'*{ext.upper()}'))
    
    if not image_files:
        print(f"❌ No images found in {input_dir}")
        sys.exit(1)
    
    print(f"🔍 Found {len(image_files)} images to optimize")
    print(f"📁 Output directory: {output_dir}")
    print(f"⚙️  Settings: Quality={args.quality}, Format={args.format.upper()}")
    if args.max_width or args.max_height:
        print(f"📐 Max dimensions: {args.max_width or 'auto'}x{args.max_height or 'auto'}")
    print()
    
    # Process each image
    success_count = 0
    total_original_size = 0
    total_optimized_size = 0
    
    for img_path in image_files:
        # Generate output filename
        output_name = img_path.stem + f'.{args.format}'
        output_path = output_dir / output_name
        
        # Track sizes
        original_size = os.path.getsize(img_path)
        total_original_size += original_size
        
        if optimize_image(img_path, output_path, args.max_width, args.max_height, args.quality, args.format):
            success_count += 1
            total_optimized_size += os.path.getsize(output_path)
    
    # Summary
    print("=" * 50)
    print(f"✅ Successfully optimized {success_count}/{len(image_files)} images")
    print(f"📊 Total original size: {total_original_size / 1024:.1f} KB")
    print(f"📊 Total optimized size: {total_optimized_size / 1024:.1f} KB")
    
    if total_original_size > 0:
        total_savings = ((total_original_size - total_optimized_size) / total_original_size) * 100
        print(f"💾 Total savings: {total_savings:.1f}% ({(total_original_size - total_optimized_size) / 1024:.1f} KB)")
    
    print(f"\n🎯 Optimized images saved to: {output_dir}")

if __name__ == '__main__':
    main()
