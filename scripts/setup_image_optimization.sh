#!/bin/bash

echo "🚀 Setting up image optimization for Trilha Labs"
echo "================================================"

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3 first."
    exit 1
fi

echo "✅ Python 3 found"

# Install Pillow for image processing
echo "📦 Installing Pillow (PIL) for image optimization..."
pip3 install Pillow

# Make the optimization script executable
chmod +x scripts/optimize_images.py

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Usage examples:"
echo "   # Optimize all images to WebP with 80% quality:"
echo "   python3 scripts/optimize_images.py"
echo ""
echo "   # Optimize with specific dimensions:"
echo "   python3 scripts/optimize_images.py --max-width 800 --max-height 600"
echo ""
echo "   # Optimize client.png specifically for testimonials (125x125):"
echo "   python3 scripts/optimize_images.py --max-width 125 --max-height 125 --quality 90"
echo ""
echo "🎯 The optimized images will be saved to public/images/optimized/"
