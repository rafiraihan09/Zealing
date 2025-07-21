# Zeal AI - Typeform-Style Questionnaire Frontend

This is a modern, responsive frontend for an AI-powered questionnaire system built with React, TypeScript, and Tailwind CSS. It features a Typeform-style one-question-at-a-time interface with dark/light theme toggle, full navigation, and backend integration.

## Features

✨ **Typeform-Style Interface**
- One question at a time for better user focus
- Smooth transitions between questions
- Progress indicator
- Previous/Next navigation
- Keyboard navigation support (Enter to proceed)

🧭 **Full Navigation System**
- **Home**: Landing page with hero section and features
- **About**: Company information and mission
- **Features**: Detailed feature showcase
- **Questionnaire**: The main AI questionnaire flow
- **Contact**: Contact form and information
- Mobile-responsive navigation menu

🎨 **Modern Design**
- Dark/Light theme toggle
- Zeal logo branding with green/teal color scheme
- Floating animations and smooth transitions
- Responsive design for all devices
- Glassmorphism effects

🤖 **AI-Ready with Backend Integration**
- Question types: text, email, textarea, radio buttons
- **Real backend integration** with loading states
- **AI insights display** with confidence scores
- **Error handling** and retry functionality
- **Personalized recommendations** from ML models
- Complete API documentation included

## Quick Start

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Run development server:**
   ```bash
   bun dev
   ```

3. **Build for production:**
   ```bash
   bun build
   ```

## Navigation Structure

The site now includes a complete navigation system:

```
📱 Header Navigation
├── 🏠 Home - Landing page with hero and features
├── ℹ️ About - Company information and values  
├── ⚡ Features - Detailed feature showcase
├── 📋 Questionnaire - Main AI questionnaire
└── 📞 Contact - Contact form and information
```

## Customizing Questions

Edit the questions array in `src/components/QuestionnaireFlow.tsx`:

```typescript
const questions = [
  {
    id: 1,
    type: "text", // text, email, textarea, radio
    question: "Your question here?",
    placeholder: "Placeholder text",
    required: true,
    options: ["Option 1", "Option 2"] // Only for radio type
  },
  // Add more questions...
];
```

### Question Types

- **text**: Single-line text input
- **email**: Email input with validation
- **textarea**: Multi-line text area
- **radio**: Radio button selection with options array

## Backend Integration

### 🔥 NEW: Complete Backend Integration

The questionnaire now includes full backend integration with:

- ✅ **API calls** to your Python ML backend
- ✅ **Loading states** during AI processing
- ✅ **Error handling** with retry functionality
- ✅ **AI insights display** with confidence scores
- ✅ **Personalized recommendations**
- ✅ **Response analysis** and visualization

### Quick Setup

1. **Configure your API URL:**
   Create `.env` file:
   ```bash
   VITE_API_URL=http://localhost:8000
   ```

2. **Replace the mock API:**
   Update the `submitQuestionnaire` function in `QuestionnaireFlow.tsx` with your endpoint.

3. **See complete integration guide:**
   - `BACKEND-INTEGRATION.md` - Complete Python Flask/FastAPI examples
   - `API-CONFIG.md` - Frontend API configuration

### Expected API Response Format

```json
{
  "success": true,
  "insights": [
    {
      "category": "Industry Analysis",
      "insight": "Based on your responses...",
      "confidence": 92
    }
  ],
  "recommendations": [
    "Start with a pilot project",
    "Consider API integration"
  ]
}
```

## Theme Customization

The color scheme uses CSS custom properties in `src/index.css`. The primary colors are set to match the Zeal logo (green/teal):

```css
:root {
  --primary: oklch(0.65 0.15 166); /* Light theme */
}

.dark {
  --primary: oklch(0.75 0.12 166); /* Dark theme */
}
```

## File Structure

```
src/
├── components/
│   ├── Header.tsx              # Navigation and theme toggle
│   ├── HomePage.tsx            # Landing page
│   ├── AboutPage.tsx           # About page
│   ├── FeaturesPage.tsx        # Features showcase
│   ├── ContactPage.tsx         # Contact form
│   ├── ThemeToggle.tsx         # Dark/light mode switch
│   └── QuestionnaireFlow.tsx   # Main questionnaire with AI integration
├── App.tsx                     # Main application with routing
└── index.css                   # Global styles and theme
```

## Deployment

The site is automatically deployed and will rebuild when you make changes. You can also deploy to any static hosting service:

```bash
bun build
# Deploy the dist/ folder
```

## What's New

### 🆕 Version 2.0 Features

1. **Complete Navigation System**
   - 5 fully designed pages
   - Mobile-responsive navigation
   - Smooth page transitions

2. **Enhanced Backend Integration**
   - Real API calls with error handling
   - AI insights with confidence scores
   - Loading states and retry functionality
   - Personalized recommendations display

3. **Professional Pages**
   - **About**: Company mission and values
   - **Features**: Comprehensive feature showcase
   - **Contact**: Working contact form
   - **Enhanced Home**: Improved landing page

4. **Better UX**
   - Smooth animations throughout
   - Better error messaging
   - Loading indicators
   - Mobile optimizations

## Next Steps

1. **Customize content** for each page to match your business
2. **Connect your Python ML backend** using the integration guides
3. **Test the complete flow** from questionnaire to AI insights
4. **Deploy to production** environment
5. **Monitor and optimize** based on user feedback

**The frontend is now a complete, production-ready AI questionnaire platform!** 🚀

## Documentation

- `FEATURES.md` - Complete feature overview
- `BACKEND-INTEGRATION.md` - Python backend integration guide
- `API-CONFIG.md` - Frontend API configuration
- `README-ZEAL.md` - This file