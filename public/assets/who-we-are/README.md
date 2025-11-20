# Who We Are Section - Image Upload Guide

This guide will help you upload all images and animations for the "Who We Are" section.

## 📁 Directory Structure

All images should be placed in: `public/assets/who-we-are/`

## 📋 Image Checklist

### ✅ Required Images

1. **noida-graphic.png** (or .jpg)
   - **Location**: Large NOIDA card (center card, column 2)
   - **Description**: NOIDA city graphic with skyline and train
   - **Recommended Size**: 600x400px or larger (will scale automatically)
   - **Format**: PNG or JPG
   - **Status**: ✅ Already configured in component

2. **team-photo.jpg**
   - **Location**: Team Image Card (Column 1, bottom)
   - **Description**: GDG NOIDA team group photo
   - **Recommended Size**: 800x600px or larger
   - **Format**: JPG
   - **Status**: ⏳ Needs to be enabled in component

3. **award.jpg**
   - **Location**: Digital Trendsetters card (Column 3)
   - **Description**: Award image (hand holding award/trophy)
   - **Recommended Size**: 200x300px
   - **Format**: JPG or PNG
   - **Status**: ⏳ Needs to be enabled in component

4. **blue-bird.jpg**
   - **Location**: Blue Bird card (Column 3, bottom left)
   - **Description**: Blue bird/twitter themed image
   - **Recommended Size**: 400x400px (square)
   - **Format**: JPG or PNG
   - **Status**: ⏳ Needs to be enabled in component

5. **custom-gif.gif**
   - **Location**: Custom GIF card (Column 1, bottom)
   - **Description**: Custom animation or video (converted to GIF)
   - **Recommended Size**: 400x300px
   - **Format**: GIF (animated)
   - **Status**: ⏳ Needs to be enabled in component

### 🏢 Company Logos (SVG format preferred)

6. **google-logo.svg**
   - **Location**: Industry Leaders card (Column 2, bottom)
   - **Description**: Google logo
   - **Format**: SVG (preferred) or PNG
   - **Status**: ⏳ Needs to be enabled in component

7. **github-logo.svg**
   - **Location**: Industry Leaders card (Column 2, bottom)
   - **Description**: GitHub logo
   - **Format**: SVG (preferred) or PNG
   - **Status**: ⏳ Needs to be enabled in component

8. **amazon-logo.svg**
   - **Location**: Industry Leaders card (Column 2, bottom)
   - **Description**: Amazon logo
   - **Format**: SVG (preferred) or PNG
   - **Status**: ⏳ Needs to be enabled in component

## 🚀 Upload Steps

### Step 1: Upload Images
1. Copy your image files to: `public/assets/who-we-are/`
2. Make sure filenames match exactly (case-sensitive):
   - `noida-graphic.png`
   - `team-photo.jpg`
   - `award.jpg`
   - `blue-bird.jpg`
   - `custom-gif.gif`
   - `google-logo.svg`
   - `github-logo.svg`
   - `amazon-logo.svg`

### Step 2: Enable Images in Component
After uploading, the images will automatically appear if they're already enabled. If not, you'll need to uncomment the Image components in `components/sections/who-we-are/index.tsx`.

## 📝 Notes

- **Image Optimization**: Next.js automatically optimizes images, but for best performance:
  - Use WebP format when possible
  - Compress images before uploading
  - Keep file sizes reasonable (< 500KB per image)

- **GIF Animations**: 
  - For animated GIFs, keep file size under 2MB
  - Consider using MP4 video with autoplay for better performance
  - GIF format is supported but larger files may load slowly

- **SVG Logos**: 
  - SVG format is preferred for logos (scalable, small file size)
  - If using PNG, ensure high resolution (2x or 3x for retina displays)

## 🔍 Testing

After uploading images:
1. Check the browser console for any 404 errors
2. Verify images appear correctly on different screen sizes
3. Test hover effects and animations

## 📞 Need Help?

If images don't appear:
1. Check file paths match exactly
2. Verify file extensions are correct
3. Check browser console for errors
4. Ensure images are in `public/assets/who-we-are/` directory


