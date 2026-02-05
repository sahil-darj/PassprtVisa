# Adding Images to Your Multi-Page Website

## Current Image Usage

Your website currently uses:
- **Emoji flags** for countries (🇺🇸, 🇬🇧, 🇨🇦, etc.)
- **Lucide React icons** for UI elements
- **Generated airplane image** (available in artifacts)

## How to Add Real Images

### Option 1: Using the Generated Airplane Image

I've already generated a professional airplane silhouette for you. To use it:

1. **Save the airplane image** from the artifacts panel
2. **Place it in** `public/images/airplane.png`
3. **Update the airplane animations** to use the image:

```tsx
// Instead of using the Plane icon:
<Plane className="w-full h-full text-sky" />

// Use the image:
<img 
  src="/images/airplane.png" 
  alt="Flying airplane" 
  className="w-full h-full object-contain"
/>
```

### Option 2: Adding Country Images

Replace emoji flags with real images:

```tsx
// Create a public/images/flags/ folder
// Add flag images: usa.png, uk.png, canada.png, etc.

// In CountriesPage.tsx, update the countries array:
const countries = [
  {
    name: "United States",
    region: "North America",
    image: "/images/flags/usa.png",  // Changed from emoji
    // ... rest of the data
  },
  // ...
];

// Update the rendering:
<img 
  src={country.image} 
  alt={`${country.name} flag`}
  className="w-24 h-24 object-cover rounded-lg mb-3"
/>
```

### Option 3: Adding Hero Background Images

Add stunning travel images to hero sections:

```tsx
// In any page component (e.g., PassportPage.tsx):
<section className="relative overflow-hidden py-20">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: "url('/images/passport-bg.jpg')" }}
  />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-sky/10 via-white to-midnight/5" />
  
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <h1>Passport Services</h1>
    {/* ... */}
  </div>
</section>
```

### Option 4: Adding Service Card Images

Add images to service cards:

```tsx
// In PassportPage.tsx, update the services array:
const services = [
  {
    icon: FileText,
    image: "/images/services/new-passport.jpg",  // Add this
    title: "New Passport",
    // ...
  },
];

// Update the card rendering:
<div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden">
  {/* Image Header */}
  <div className="h-48 overflow-hidden">
    <img 
      src={service.image} 
      alt={service.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
    />
  </div>
  
  {/* Card Content */}
  <div className="p-8">
    <h3>{service.title}</h3>
    {/* ... */}
  </div>
</div>
```

### Option 5: Adding Blog Post Images

Update BlogGrid component with images:

```tsx
// In BlogGrid.tsx:
const blogs = [
  {
    title: "Top 10 Travel Destinations 2024",
    image: "/images/blog/destinations-2024.jpg",  // Add this
    excerpt: "Discover the must-visit places...",
    date: "Jan 15, 2024",
    category: "Travel"
  },
];

// Render with image:
<div className="bg-white rounded-2xl overflow-hidden">
  <img 
    src={blog.image} 
    alt={blog.title}
    className="w-full h-56 object-cover"
  />
  <div className="p-6">
    <h3>{blog.title}</h3>
    {/* ... */}
  </div>
</div>
```

## Recommended Image Sources

### Free Stock Photos:
1. **Unsplash** - https://unsplash.com
   - Search: "passport", "visa", "travel", "airplane"
   
2. **Pexels** - https://pexels.com
   - High-quality travel images
   
3. **Pixabay** - https://pixabay.com
   - Free for commercial use

### Icon Libraries:
1. **Lucide React** (already installed)
   - 1000+ icons
   
2. **Heroicons** - https://heroicons.com
   - Beautiful hand-crafted icons

### Image Optimization Tips:

```tsx
// 1. Use WebP format for better compression
<img src="/images/hero.webp" alt="Hero" />

// 2. Lazy load images
<img 
  src="/images/large-image.jpg" 
  loading="lazy"
  alt="Description"
/>

// 3. Provide multiple sizes for responsive images
<img 
  srcSet="
    /images/small.jpg 400w,
    /images/medium.jpg 800w,
    /images/large.jpg 1200w
  "
  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
  src="/images/medium.jpg"
  alt="Responsive image"
/>

// 4. Add blur placeholder while loading
<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-br from-sky/20 to-midnight/20 animate-pulse" />
  <img 
    src="/images/photo.jpg"
    onLoad={(e) => e.target.previousSibling.remove()}
    alt="Photo"
  />
</div>
```

## Folder Structure for Images

```
public/
├── images/
│   ├── airplane.png
│   ├── logo.png
│   ├── flags/
│   │   ├── usa.png
│   │   ├── uk.png
│   │   ├── canada.png
│   │   └── ...
│   ├── services/
│   │   ├── passport.jpg
│   │   ├── visa.jpg
│   │   └── ...
│   ├── blog/
│   │   ├── post1.jpg
│   │   ├── post2.jpg
│   │   └── ...
│   └── backgrounds/
│       ├── hero.jpg
│       ├── about.jpg
│       └── ...
```

## Using AI-Generated Images

You can ask me to generate images for specific needs:

```
"Generate a professional image of a passport with stamps"
"Create a modern visa application illustration"
"Generate a travel destination image for Japan"
"Create an icon for work visa services"
```

## Image Component Best Practices

Create a reusable Image component:

```tsx
// src/app/components/OptimizedImage.tsx
import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className 
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-sky/10 to-midnight/10 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

// Usage:
<OptimizedImage 
  src="/images/passport.jpg" 
  alt="Passport services"
  className="w-full h-64 object-cover rounded-lg"
/>
```

## Next Steps

1. **Choose images** from stock photo sites
2. **Download and optimize** them (compress, resize)
3. **Place in public/images/** folder
4. **Update components** to use the images
5. **Test loading performance**

Your website will look even more professional with real images!
