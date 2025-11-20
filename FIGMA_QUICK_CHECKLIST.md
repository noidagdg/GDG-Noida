# ✅ Figma Export Quick Checklist

Use this checklist as you export each image from Figma.

## 📸 Images to Export

### Column 1 (Left Side)
- [ ] **Community Card** - No image needed (uses icon)
- [ ] **Robot Card** - No image needed (uses icon)
- [ ] **Tech Diverse Card** - No image needed (uses icons)
- [ ] **Team Photo** → Export as `team-photo.jpg` (800x600px, JPG, 1x)
- [ ] **Custom GIF** → Export as `custom-gif.gif` (400x300px, GIF, 1x)

### Column 2 (Middle)
- [ ] **GDG NOIDA Logo** - No image needed (text-based)
- [ ] **3+ Years Card** - No image needed (uses icon)
- [ ] **NOIDA Graphic** → Export as `noida-graphic.png` (600x400px, PNG, 2x) ⭐ **PRIORITY**
- [ ] **Company Logos** → Export as:
  - [ ] `google-logo.svg` (SVG preferred)
  - [ ] `github-logo.svg` (SVG preferred)
  - [ ] `amazon-logo.svg` (SVG preferred)

### Column 3 (Right Side)
- [ ] **33K+ Card** - No image needed (uses icon)
- [ ] **50+ Card** - No image needed (uses icon)
- [ ] **Award Image** → Export as `award.jpg` or `award.png` (200x300px, 2x)
- [ ] **Blue Bird** → Export as `blue-bird.jpg` (400x400px, PNG/JPG, 2x)
- [ ] **Behind the Scenes** - No image needed (uses animated placeholders)

---

## 🎯 Export Steps (Repeat for Each Image)

1. **In Figma:**
   - [ ] Select the frame/layer
   - [ ] Right sidebar → Export section
   - [ ] Click **+** button
   - [ ] Choose format (PNG/JPG/SVG/GIF)
   - [ ] Set scale (1x or 2x)
   - [ ] Click **Export [Name]**

2. **Save File:**
   - [ ] Save to: `public/assets/who-we-are/`
   - [ ] Use exact filename (case-sensitive!)

3. **Enable in Code:**
   - [ ] Open `components/sections/who-we-are/index.tsx`
   - [ ] Find the placeholder code
   - [ ] Remove placeholder div
   - [ ] Uncomment Image component
   - [ ] Save file

4. **Test:**
   - [ ] Refresh browser at `http://localhost:3001`
   - [ ] Check if image appears
   - [ ] Verify no 404 errors in console

---

## 📋 File Summary

| Image | Filename | Format | Size | Scale | Priority |
|-------|----------|--------|------|-------|----------|
| NOIDA Graphic | `noida-graphic.png` | PNG | 600x400 | 2x | ⭐ High |
| Team Photo | `team-photo.jpg` | JPG | 800x600 | 1x | High |
| Award | `award.jpg` | JPG/PNG | 200x300 | 2x | Medium |
| Blue Bird | `blue-bird.jpg` | JPG/PNG | 400x400 | 2x | Medium |
| Custom GIF | `custom-gif.gif` | GIF | 400x300 | 1x | Medium |
| Google Logo | `google-logo.svg` | SVG | Any | 1x | Low |
| GitHub Logo | `github-logo.svg` | SVG | Any | 1x | Low |
| Amazon Logo | `amazon-logo.svg` | SVG | Any | 1x | Low |

---

## 🚀 Quick Start (5 Minutes)

**Priority 1 - NOIDA Graphic (Most Important):**
1. Export `noida-graphic.png` from Figma
2. Save to `public/assets/who-we-are/`
3. In component, remove placeholder, uncomment Image code
4. Refresh browser - you should see it!

**Then continue with other images one by one.**

---

## 💡 Pro Tips

- **Export all at once:** Select multiple frames in Figma, export all together
- **Name consistently:** Use lowercase with hyphens
- **Test frequently:** Export one image, enable it, test, then move to next
- **Keep originals:** Save original Figma exports in a backup folder

---

**Full detailed guide:** See `FIGMA_EXPORT_GUIDE.md` for complete instructions!

