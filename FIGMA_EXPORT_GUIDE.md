# 🎨 Figma to Project - Image Export Guide

Complete guide for exporting images from Figma and uploading them to your "Who We Are" section.

## 📋 Prerequisites

- Figma file with your designs
- Access to the design file
- Basic knowledge of Figma export features

---

## 🚀 Step-by-Step Export Process

### Step 1: Prepare Your Figma File

1. **Open your Figma design file**
2. **Identify each card/component** that needs to be exported
3. **Organize frames** - Make sure each card is in its own frame for easy export

### Step 2: Export Settings in Figma

For each image, follow these export settings:

#### **Recommended Export Settings:**

| Image Type | Format | Size | Scale |
|------------|--------|------|-------|
| NOIDA Graphic | PNG | 600x400px | 2x (for retina) |
| Team Photo | JPG | 800x600px | 1x |
| Award Image | PNG | 200x300px | 2x |
| Blue Bird | JPG/PNG | 400x400px | 2x |
| Custom GIF | GIF | 400x300px | 1x |
| Company Logos | SVG | Any | 1x |

---

## 📸 Export Each Image

### 1. **NOIDA Graphic** (`noida-graphic.png`)

**Location in Figma:** Large NOIDA card (center card, column 2)

**Steps:**
1. Select the frame/layer containing the NOIDA graphic (city skyline + train)
2. In the right sidebar, click the **Export** section
3. Click **+** to add export setting
4. Set format to **PNG**
5. Set scale to **2x** (for high quality)
6. Click **Export [Frame Name]**
7. Save as: `noida-graphic.png`

**File Location:** `public/assets/who-we-are/noida-graphic.png`

---

### 2. **Team Photo** (`team-photo.jpg`)

**Location in Figma:** Team Image Card (Column 1, bottom)

**Steps:**
1. Select the team photo frame
2. Add export setting: **JPG**, **1x** scale
3. Export and save as: `team-photo.jpg`

**File Location:** `public/assets/who-we-are/team-photo.jpg`

**Note:** If it's a group photo, make sure it's cropped to fit the card dimensions (800x600px recommended)

---

### 3. **Award Image** (`award.jpg`)

**Location in Figma:** Digital Trendsetters card (Column 3)

**Steps:**
1. Select the award/trophy image
2. Add export setting: **PNG** (if it has transparency) or **JPG**, **2x** scale
3. Export and save as: `award.jpg` or `award.png`

**File Location:** `public/assets/who-we-are/award.jpg`

---

### 4. **Blue Bird Image** (`blue-bird.jpg`)

**Location in Figma:** Blue Bird card (Column 3, bottom left)

**Steps:**
1. Select the blue bird image frame
2. Add export setting: **JPG** or **PNG**, **2x** scale
3. Export and save as: `blue-bird.jpg`

**File Location:** `public/assets/who-we-are/blue-bird.jpg`

---

### 5. **Custom GIF/Animation** (`custom-gif.gif`)

**Location in Figma:** Custom GIF card (Column 1, bottom)

**Steps:**
1. If you have an animated GIF in Figma:
   - Select the frame
   - Export as **GIF** format
   - Save as: `custom-gif.gif`

2. **If you have a video/animation:**
   - You may need to convert it to GIF using an external tool
   - Or export as MP4 and we can handle it differently

**File Location:** `public/assets/who-we-are/custom-gif.gif`

**Alternative:** If Figma doesn't support GIF export, export as PNG sequence and use a tool like [EZGIF](https://ezgif.com/) to create a GIF.

---

### 6. **Company Logos** (SVG format preferred)

**Location in Figma:** Industry Leaders card (Column 2, bottom)

**For each logo (Google, GitHub, Amazon):**

**Steps:**
1. Select the logo frame/layer
2. Add export setting: **SVG** format (preferred for logos)
3. Export and save as:
   - `google-logo.svg`
   - `github-logo.svg`
   - `amazon-logo.svg`

**File Location:** `public/assets/who-we-are/google-logo.svg`

**Note:** 
- SVG is preferred for logos (scalable, small file size)
- If logo is raster (PNG), export as PNG at 2x scale
- Make sure logos are on transparent backgrounds

---

## 📁 Organizing Exported Files

### Step 3: Create Folder Structure

1. Navigate to your project folder
2. Go to: `public/assets/who-we-are/`
3. Place all exported images in this folder

**Final Structure:**
```
public/
└── assets/
    └── who-we-are/
        ├── noida-graphic.png
        ├── team-photo.jpg
        ├── award.jpg
        ├── blue-bird.jpg
        ├── custom-gif.gif
        ├── google-logo.svg
        ├── github-logo.svg
        └── amazon-logo.svg
```

---

## 🔧 Enable Images in Component

### Step 4: Update Component Code

After uploading images, you need to enable them in the component:

**File:** `components/sections/who-we-are/index.tsx`

#### **For NOIDA Graphic (Line ~174-184):**

**Remove this placeholder:**
```tsx
<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-yellow-100 rounded-lg opacity-50">
  <p className="text-blue-600 text-sm font-medium">NOIDA Graphic</p>
</div>
```

**Uncomment this:**
```tsx
<Image
  src={imagePaths.noidaGraphic}
  alt="NOIDA City Graphic"
  width={600}
  height={400}
  className="w-full h-full object-contain"
  priority
/>
```

#### **For Team Photo (Line ~100-105):**

**Remove this placeholder:**
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
  <Users2 className="w-16 h-16 text-white opacity-80" />
</div>
```

**Uncomment this:**
```tsx
<Image
  src={imagePaths.teamPhoto}
  alt="GDG NOIDA Team"
  fill
  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
/>
```

#### **For Award Image (Line ~262-268):**

**Remove this placeholder:**
```tsx
<div className="absolute bottom-4 right-4 w-20 h-28 sm:w-24 sm:h-32 bg-green-300 rounded-lg flex items-center justify-center transform rotate-6 shadow-lg border-2 border-white group-hover:rotate-0 transition-transform duration-300 z-10">
  <span className="text-4xl">🏆</span>
</div>
```

**Uncomment this:**
```tsx
<Image
  src={imagePaths.award}
  alt="Award"
  width={96}
  height={128}
  className="absolute bottom-4 right-4 w-20 h-28 sm:w-24 sm:h-32 object-cover rounded-lg transform rotate-6 shadow-lg border-2 border-white group-hover:rotate-0 transition-transform duration-300 z-10"
/>
```

#### **For Blue Bird (Line ~279-284):**

**Remove this placeholder:**
```tsx
<div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
  <span className="text-4xl">🐦</span>
</div>
```

**Uncomment this:**
```tsx
<Image
  src={imagePaths.blueBird}
  alt="Blue Bird"
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
```

#### **For Custom GIF (Line ~119-125):**

**Remove this placeholder:**
```tsx
<Video className="w-8 h-8 text-neutral-700 mb-2 relative z-10 group-hover:scale-110 transition-transform" />
<p className="text-neutral-700 font-medium relative z-10 text-sm">Wait for it...</p>
```

**Uncomment this:**
```tsx
<Image
  src={imagePaths.customGif}
  alt="Custom animation"
  fill
  className="object-cover"
/>
```

#### **For Company Logos (Line ~202-233):**

**Remove these placeholders:**
```tsx
<Globe className="h-4 sm:h-5 w-4 sm:w-5 text-green-700 hover:scale-110 transition-transform" />
<Github className="h-5 sm:h-6 w-5 sm:w-6 text-green-700 hover:scale-110 transition-transform" />
<Building2 className="h-3 sm:h-4 w-3 sm:w-4 text-green-700 hover:scale-110 transition-transform" />
```

**Uncomment these:**
```tsx
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

---

## 🎯 Figma Export Tips

### **Best Practices:**

1. **Use Frames:**
   - Create frames for each exportable element
   - Name frames clearly (e.g., "NOIDA Graphic", "Team Photo")

2. **Export Settings:**
   - Use **2x scale** for high-resolution displays
   - Use **PNG** for graphics with transparency
   - Use **JPG** for photos (smaller file size)
   - Use **SVG** for logos and icons

3. **File Naming:**
   - Use lowercase with hyphens: `noida-graphic.png`
   - Be consistent with naming
   - Match the names in `imagePaths` object

4. **Optimization:**
   - Compress images before uploading (use tools like TinyPNG)
   - Keep file sizes reasonable (< 500KB for images, < 2MB for GIFs)
   - Use WebP format if possible (better compression)

5. **Batch Export:**
   - In Figma, you can select multiple frames and export all at once
   - Use the Export panel to manage multiple exports

---

## ✅ Verification Checklist

After uploading all images:

- [ ] All images are in `public/assets/who-we-are/` folder
- [ ] Filenames match exactly (case-sensitive)
- [ ] Images are enabled in component code
- [ ] Test on `http://localhost:3001`
- [ ] Check browser console for 404 errors
- [ ] Verify images appear correctly on mobile/tablet/desktop
- [ ] Test hover effects and animations

---

## 🐛 Troubleshooting

### **Image not showing?**
1. Check filename matches exactly (including extension)
2. Verify file is in correct folder: `public/assets/who-we-are/`
3. Check browser console (F12) for 404 errors
4. Make sure you uncommented the Image component code

### **Image looks blurry?**
- Export at 2x scale from Figma
- Use PNG format for graphics
- Check image dimensions match component requirements

### **File too large?**
- Compress images using TinyPNG or similar tools
- Use JPG for photos instead of PNG
- Reduce export scale if file is too large

### **SVG not working?**
- Make sure SVG is properly formatted
- Check if SVG has any embedded images
- Try exporting as PNG at 2x scale as alternative

---

## 📞 Quick Reference

**Export Path in Figma:**
1. Select frame/layer
2. Right sidebar → Export section
3. Click **+** → Choose format and scale
4. Click **Export [Name]**

**Upload Path:**
1. Copy exported file
2. Paste to: `public/assets/who-we-are/`
3. Enable in component code
4. Refresh browser

**Test:**
- Open: `http://localhost:3001`
- Scroll to "Who We Are" section
- Verify images appear correctly

---

**Need help?** Check the component file comments or refer to `UPLOAD_GUIDE.md` for more details!

