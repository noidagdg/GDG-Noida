# 🖼️ Image Upload Guide for "Who We Are" Section

## Quick Start

1. **Create the folder** (if not exists): `public/assets/who-we-are/`
2. **Upload your images** to that folder
3. **Enable images** in the component (see below)

---

## 📍 Step-by-Step Instructions

### Step 1: Prepare Your Images

Make sure you have these images ready:

| Image Name | Card Location | Format | Size Recommendation |
|------------|---------------|--------|---------------------|
| `noida-graphic.png` | Large NOIDA card (center) | PNG/JPG | 600x400px |
| `team-photo.jpg` | Team photo card (Column 1) | JPG | 800x600px |
| `award.jpg` | Digital Trendsetters card | JPG/PNG | 200x300px |
| `blue-bird.jpg` | Blue bird card (Column 3) | JPG/PNG | 400x400px |
| `custom-gif.gif` | Custom GIF card (Column 1) | GIF | 400x300px |
| `google-logo.svg` | Industry Leaders card | SVG/PNG | Any size |
| `github-logo.svg` | Industry Leaders card | SVG/PNG | Any size |
| `amazon-logo.svg` | Industry Leaders card | SVG/PNG | Any size |

### Step 2: Upload Images

**Option A: Using File Explorer (Windows)**
1. Navigate to: `C:\Users\tnu\gdg-noida-landing\public\assets\who-we-are\`
2. Copy and paste your image files into this folder
3. Make sure filenames match exactly (case-sensitive!)

**Option B: Using VS Code**
1. Right-click on `public/assets/who-we-are/` folder in VS Code
2. Select "Reveal in File Explorer"
3. Copy your images into that folder

### Step 3: Enable Images in Component

After uploading, you need to enable each image in the component. Here's how:

#### For Team Photo (Line ~93-98):
```tsx
// REMOVE these lines (the placeholder):
<div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
  <span className="text-white text-4xl">👥</span>
</div>

// UNCOMMENT these lines (remove /* and */):
<Image
  src={imagePaths.teamPhoto}
  alt="GDG NOIDA Team"
  fill
  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
/>
```

#### For Custom GIF (Line ~110-115):
```tsx
// REMOVE this line:
<p className="text-neutral-700 font-medium relative z-10">Wait for it... 🎥</p>

// UNCOMMENT these lines:
<Image
  src={imagePaths.customGif}
  alt="Custom animation"
  fill
  className="object-cover"
/>
```

#### For Award Image (Line ~262-268):
```tsx
// REMOVE these lines (the placeholder):
<div className="absolute bottom-4 right-4 w-20 h-28 sm:w-24 sm:h-32 bg-green-300 rounded-lg flex items-center justify-center transform rotate-6 shadow-lg border-2 border-white group-hover:rotate-0 transition-transform duration-300 z-10">
  <span className="text-4xl">🏆</span>
</div>

// UNCOMMENT these lines:
<Image
  src={imagePaths.award}
  alt="Award"
  width={96}
  height={128}
  className="absolute bottom-4 right-4 w-20 h-28 sm:w-24 sm:h-32 object-cover rounded-lg transform rotate-6 shadow-lg border-2 border-white group-hover:rotate-0 transition-transform duration-300 z-10"
/>
```

#### For Blue Bird Image (Line ~279-284):
```tsx
// REMOVE these lines (the placeholder):
<div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
  <span className="text-4xl">🐦</span>
</div>

// UNCOMMENT these lines:
<Image
  src={imagePaths.blueBird}
  alt="Blue Bird"
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
```

#### For Company Logos (Line ~197-217):
```tsx
// REMOVE these lines (the placeholders):
<div className="h-4 sm:h-5 w-auto flex items-center justify-center">
  <span className="text-2xl">🔍</span>
</div>
<div className="h-5 sm:h-6 w-auto flex items-center justify-center">
  <span className="text-2xl">💻</span>
</div>
<div className="h-3 sm:h-4 w-auto flex items-center justify-center">
  <span className="text-2xl">📦</span>
</div>

// UNCOMMENT these lines:
<Image
  src={imagePaths.googleLogo}
  alt="Google"
  width={80}
  height={20}
  className="h-4 sm:h-5 object-contain"
/>
<Image
  src={imagePaths.githubLogo}
  alt="Github"
  width={80}
  height={24}
  className="h-5 sm:h-6 object-contain"
/>
<Image
  src={imagePaths.amazonLogo}
  alt="Amazon"
  width={80}
  height={16}
  className="h-3 sm:h-4 object-contain"
/>
```

### Step 4: Verify Images

1. Save the component file
2. Check your browser at `http://localhost:3001`
3. Look for any 404 errors in the browser console (F12)
4. Verify images appear correctly

---

## 🎯 Quick Reference: File Locations

```
public/
└── assets/
    └── who-we-are/
        ├── noida-graphic.png      ✅ Already enabled
        ├── team-photo.jpg          ⏳ Enable in component
        ├── award.jpg               ⏳ Enable in component
        ├── blue-bird.jpg            ⏳ Enable in component
        ├── custom-gif.gif          ⏳ Enable in component
        ├── google-logo.svg         ⏳ Enable in component
        ├── github-logo.svg         ⏳ Enable in component
        └── amazon-logo.svg         ⏳ Enable in component
```

## 💡 Tips

- **Image Formats**: Use JPG for photos, PNG for graphics with transparency, SVG for logos, GIF for animations
- **File Sizes**: Keep images under 500KB for faster loading (except GIFs which can be up to 2MB)
- **Naming**: Filenames must match exactly (case-sensitive) - `team-photo.jpg` not `Team-Photo.jpg`
- **Testing**: Always test on mobile, tablet, and desktop views

## 🐛 Troubleshooting

**Image not showing?**
1. Check filename matches exactly (including extension)
2. Verify file is in `public/assets/who-we-are/` folder
3. Check browser console for 404 errors
4. Make sure you uncommented the Image component code

**Image looks blurry?**
- Use higher resolution images (2x or 3x the display size)
- Use PNG or SVG for logos instead of JPG

**GIF not animating?**
- Make sure it's a proper animated GIF file
- Check file size isn't too large (< 2MB recommended)

---

## ✅ Checklist

- [ ] Created `public/assets/who-we-are/` folder
- [ ] Uploaded `noida-graphic.png` (already enabled)
- [ ] Uploaded `team-photo.jpg` and enabled in component
- [ ] Uploaded `award.jpg` and enabled in component
- [ ] Uploaded `blue-bird.jpg` and enabled in component
- [ ] Uploaded `custom-gif.gif` and enabled in component
- [ ] Uploaded `google-logo.svg` and enabled in component
- [ ] Uploaded `github-logo.svg` and enabled in component
- [ ] Uploaded `amazon-logo.svg` and enabled in component
- [ ] Tested all images on localhost:3001
- [ ] Verified images work on mobile view

---

**Need help?** Check the component file comments or the README in the `who-we-are` folder!


