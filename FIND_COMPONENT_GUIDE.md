# 📍 How to Find the Component File

## 🗂️ File Location

The "Who We Are" component file is located at:

```
📁 gdg-noida-landing/
  └── 📁 components/
      └── 📁 sections/
          └── 📁 who-we-are/
              └── 📄 index.tsx  ← THIS IS THE FILE YOU NEED!
```

**Full Path:**
```
C:\Users\tnu\gdg-noida-landing\components\sections\who-we-are\index.tsx
```

---

## 🔍 How to Find It

### **Method 1: Using VS Code File Explorer**

1. **Open VS Code** (if not already open)
2. **Look at the left sidebar** - you should see a file explorer
3. **Navigate through folders:**
   - Click on `components` folder
   - Click on `sections` folder
   - Click on `who-we-are` folder
   - Click on `index.tsx` file

### **Method 2: Using VS Code Search**

1. **Press `Ctrl + P`** (or `Cmd + P` on Mac)
2. **Type:** `who-we-are/index.tsx`
3. **Press Enter** - file will open

### **Method 3: Using File Explorer (Windows)**

1. **Open File Explorer**
2. **Navigate to:** `C:\Users\tnu\gdg-noida-landing`
3. **Go to:** `components` → `sections` → `who-we-are`
4. **Double-click:** `index.tsx`

---

## 📝 What to Look For in the File

Once you open `index.tsx`, you'll see:

### **Line 13-22:** Image Paths Configuration
```tsx
const imagePaths = {
  noidaGraphic: "/assets/who-we-are/noida-graphic.png",
  teamPhoto: "/assets/who-we-are/team-photo.jpg",
  // ... more paths
};
```

### **Line ~174-184:** NOIDA Graphic (with placeholder)
Look for this section - it has a placeholder div that needs to be replaced with Image component.

### **Line ~100-105:** Team Photo (with placeholder)
Look for this section - has placeholder that needs Image component.

---

## 🎯 Quick Navigation Tips

### **In VS Code:**

1. **Use Search in File:**
   - Press `Ctrl + F` (or `Cmd + F`)
   - Search for: `placeholder` or `NOIDA Graphic` or `Team Photo`
   - This will jump to the relevant sections

2. **Use Go to Line:**
   - Press `Ctrl + G` (or `Cmd + G`)
   - Type line number (e.g., `174` for NOIDA Graphic)

3. **Use Outline View:**
   - Look for the outline/symbols panel (usually on right sidebar)
   - Click on section names to jump to them

---

## 📋 Sections in the File

Here are the key sections you'll need to modify:

| Section | Line Number | What to Do |
|---------|-------------|------------|
| NOIDA Graphic | ~174-184 | Remove placeholder, uncomment Image |
| Team Photo | ~100-105 | Remove placeholder, uncomment Image |
| Award Image | ~262-268 | Remove placeholder, uncomment Image |
| Blue Bird | ~279-284 | Remove placeholder, uncomment Image |
| Custom GIF | ~119-125 | Remove placeholder, uncomment Image |
| Company Logos | ~202-233 | Remove icons, uncomment Image components |

---

## 🖼️ Image Upload Folder

Images go here:
```
📁 gdg-noida-landing/
  └── 📁 public/
      └── 📁 assets/
          └── 📁 who-we-are/
              ├── 📄 noida-graphic.png
              ├── 📄 team-photo.jpg
              ├── 📄 award.jpg
              └── ... (other images)
```

**Full Path:**
```
C:\Users\tnu\gdg-noida-landing\public\assets\who-we-are\
```

---

## ✅ Quick Check

**Can you see these folders/files?**

- [ ] `components` folder in project root?
- [ ] `components/sections` folder?
- [ ] `components/sections/who-we-are` folder?
- [ ] `components/sections/who-we-are/index.tsx` file?
- [ ] `public/assets/who-we-are` folder?

If you can't see them, let me know and I'll help you locate them!

---

## 🆘 Still Can't Find It?

**Option 1: Search in VS Code**
- Press `Ctrl + Shift + F` (global search)
- Search for: `WhoWeAre` or `noidaGraphic`
- This will show you the file location

**Option 2: Check if file exists**
- In terminal, run: `dir components\sections\who-we-are\index.tsx`
- This will confirm if the file exists

**Option 3: Tell me what you see**
- What folders do you see in your project?
- Are you using VS Code, another editor, or File Explorer?

