# Image Optimization Guide

## Current Image Issues
The portfolio currently uses large, unoptimized images that impact loading performance. Here's how to optimize them:

## Recommended Image Sizes

### Hero Images
- **Desktop**: 1200x800px (max)
- **Tablet**: 800x600px
- **Mobile**: 600x400px

### Project Thumbnails
- **Desktop**: 800x600px
- **Mobile**: 400x300px

### Profile Images
- **Desktop**: 600x600px
- **Mobile**: 300x300px

## Optimization Steps

### 1. Use WebP Format
Convert all images to WebP format for better compression:
```bash
# Using ImageMagick
convert image.jpg -quality 85 image.webp

# Using cwebp (Google's WebP encoder)
cwebp -q 85 image.jpg -o image.webp
```

### 2. Implement Responsive Images
Use `srcset` and `sizes` attributes:

```html
<img src="image-800w.webp"
     srcset="image-400w.webp 400w,
             image-800w.webp 800w,
             image-1200w.webp 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px"
     alt="Description"
     loading="lazy">
```

### 3. Lazy Loading
All images should have `loading="lazy"` attribute (already implemented).

### 4. Compression Settings
- **JPEG**: Quality 80-85
- **WebP**: Quality 80-85
- **PNG**: Use TinyPNG or similar for lossless compression

## Cloudinary Optimization
Since you're using Cloudinary, add these transformations:

### For Hero Images
```
https://res.cloudinary.com/dcf0cpuqf/image/upload/f_auto,q_auto,w_1200,h_800,c_fill/v1745145351/image.jpg
```

### For Thumbnails
```
https://res.cloudinary.com/dcf0cpuqf/image/upload/f_auto,q_auto,w_800,h_600,c_fill/v1745145351/image.jpg
```

### Parameters Explained
- `f_auto`: Automatic format selection (WebP for supported browsers)
- `q_auto`: Automatic quality optimization
- `w_1200,h_800`: Width and height
- `c_fill`: Crop mode to fill dimensions

## Implementation Priority

1. **High Priority**: Optimize hero images and project thumbnails
2. **Medium Priority**: Optimize profile and about page images
3. **Low Priority**: Optimize decorative images

## Tools for Optimization

### Online Tools
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (Mac app)

### Command Line
- ImageMagick
- cwebp (Google WebP encoder)
- jpegoptim
- optipng

## Performance Impact
Expected improvements:
- **File size reduction**: 40-70%
- **Loading time improvement**: 30-50%
- **Core Web Vitals**: Better LCP and CLS scores

## Next Steps
1. Optimize all hero images using Cloudinary transformations
2. Convert project thumbnails to WebP format
3. Implement responsive images with proper srcset
4. Test performance improvements with Lighthouse
