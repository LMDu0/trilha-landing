#!/usr/bin/env python3
"""
Script para converter SVGs para WebP otimizado
Específico para os mockups do Trilha Labs
"""

import os
import sys
from pathlib import Path
import cairosvg
from PIL import Image
import io

def convert_svg_to_webp(svg_path, output_path, width=450, height=580, quality=80):
    """
    Converte SVG para WebP com dimensões específicas
    """
    try:
        # Convert SVG to PNG in memory
        png_data = cairosvg.svg2png(
            url=str(svg_path),
            output_width=width,
            output_height=height
        )
        
        # Open PNG data with Pillow
        with Image.open(io.BytesIO(png_data)) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Save as WebP
            img.save(output_path, 'WebP', quality=quality, optimize=True, method=6)
            
            # Get file sizes
            original_size = os.path.getsize(svg_path)
            optimized_size = os.path.getsize(output_path)
            savings = ((original_size - optimized_size) / original_size) * 100
            
            print(f"✅ {svg_path.name}")
            print(f"   Original: {original_size / 1024:.1f} KB (SVG)")
            print(f"   Optimized: {optimized_size / 1024:.1f} KB (WebP {width}x{height})")
            print(f"   Savings: {savings:.1f}%")
            print()
            
            return True
            
    except Exception as e:
        print(f"❌ Error converting {svg_path}: {e}")
        return False

def main():
    input_dir = Path('public/images')
    output_dir = Path('public/images/optimized')
    
    # Create output directory
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Find all SVG mockups
    svg_files = list(input_dir.glob('*-mockup.svg'))
    
    if not svg_files:
        print("❌ No SVG mockup files found")
        sys.exit(1)
    
    print(f"🔍 Found {len(svg_files)} SVG mockups to convert")
    print(f"📁 Output directory: {output_dir}")
    print(f"📐 Target dimensions: 450x580px")
    print(f"⚙️  WebP quality: 80%")
    print()
    
    success_count = 0
    total_original_size = 0
    total_optimized_size = 0
    
    for svg_path in svg_files:
        # Generate output filename
        output_name = svg_path.stem + '.webp'
        output_path = output_dir / output_name
        
        # Track sizes
        original_size = os.path.getsize(svg_path)
        total_original_size += original_size
        
        if convert_svg_to_webp(svg_path, output_path):
            success_count += 1
            total_optimized_size += os.path.getsize(output_path)
    
    # Summary
    print("=" * 60)
    print(f"✅ Successfully converted {success_count}/{len(svg_files)} SVG mockups")
    print(f"📊 Total original size: {total_original_size / 1024:.1f} KB")
    print(f"📊 Total optimized size: {total_optimized_size / 1024:.1f} KB")
    
    if total_original_size > 0:
        total_savings = ((total_original_size - total_optimized_size) / total_original_size) * 100
        print(f"💾 Total savings: {total_savings:.1f}% ({(total_original_size - total_optimized_size) / 1024:.1f} KB)")
    
    print(f"\n🎯 Optimized WebP files saved to: {output_dir}")
    print("\n📝 Next steps:")
    print("   1. Copy optimized files to main images directory")
    print("   2. Update component code to use .webp extensions")

if __name__ == '__main__':
    main()
