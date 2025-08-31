# Google Analytics Setup Guide

## Current Status
Google Analytics tracking code has been added to all pages, but you need to replace the placeholder ID with your actual Google Analytics 4 (GA4) property ID.

## Setup Steps

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Follow the setup wizard to create your account and property

### 2. Get Your Measurement ID
1. In Google Analytics, go to Admin (gear icon)
2. Under "Property", click "Data Streams"
3. Select your web stream or create a new one
4. Copy the Measurement ID (format: G-XXXXXXXXXX)

### 3. Replace Placeholder ID
Replace `G-XXXXXXXXXX` in all HTML files with your actual Measurement ID:

**Files to update:**
- `index.html`
- `home.html`
- `about.html`
- `projects.html`

**Example:**
```html
<!-- Replace this -->
gtag('config', 'G-XXXXXXXXXX', {

<!-- With your actual ID -->
gtag('config', 'G-ABC123DEF4', {
```

### 4. Verify Installation
1. Open your website
2. Open browser developer tools
3. Go to Network tab
4. Look for requests to `google-analytics.com` or `googletagmanager.com`
5. Check Google Analytics Real-Time reports

## What's Being Tracked

### Page Views
- Homepage visits
- About page visits
- Projects page visits
- Individual project clicks

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: Loading performance
- **FID (First Input Delay)**: Interactivity
- **CLS (Cumulative Layout Shift)**: Visual stability

### Custom Events
- Page navigation
- External link clicks
- Project interactions

## Enhanced Tracking Features

### 1. Custom Dimensions
```javascript
custom_map: {
  'custom_dimension1': 'user_type',
  'custom_dimension2': 'page_section'
}
```

### 2. Performance Monitoring
- Core Web Vitals tracking
- Page load times
- User interaction metrics

### 3. Event Tracking
The following events are automatically tracked:
- Page views
- External link clicks
- Form submissions (if added)
- Scroll depth (can be added)

## Privacy Considerations

### GDPR Compliance
- Consider adding a cookie consent banner
- Implement IP anonymization
- Add privacy policy

### Cookie Notice
Add this to your privacy policy:
```
This website uses Google Analytics to analyze site usage. 
Google Analytics uses cookies to collect information about 
your use of this website. You can opt out of Google Analytics 
by installing the Google Analytics Opt-out Browser Add-on.
```

## Advanced Configuration

### 1. Enhanced Ecommerce (Optional)
If you plan to add ecommerce features:
```javascript
gtag('config', 'G-XXXXXXXXXX', {
  'custom_map': {'custom_dimension1': 'user_type'},
  'send_page_view': true
});
```

### 2. User ID Tracking (Optional)
For better user journey tracking:
```javascript
gtag('config', 'G-XXXXXXXXXX', {
  'user_id': 'USER_ID'
});
```

### 3. Custom Events
Track specific user interactions:
```javascript
// Track project clicks
gtag('event', 'click', {
  'event_category': 'Projects',
  'event_label': 'Project Name',
  'value': 1
});
```

## Troubleshooting

### Common Issues
1. **No data appearing**: Check if ad blockers are enabled
2. **Wrong page titles**: Verify page_title parameters
3. **Missing events**: Check browser console for errors

### Debug Mode
Enable debug mode for testing:
```javascript
gtag('config', 'G-XXXXXXXXXX', {
  'debug_mode': true
});
```

## Performance Impact
- Minimal impact on page load time
- Asynchronous loading
- No blocking of page rendering

## Next Steps
1. Replace placeholder GA4 ID with your actual ID
2. Test tracking in real-time
3. Set up custom goals and conversions
4. Monitor Core Web Vitals in GA4
5. Consider adding enhanced ecommerce if needed
