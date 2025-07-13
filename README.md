# iPhone 17 Pro - Premium Product Showcase Website

![iPhone 17 Pro Hero](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)

> A modern, Apple-inspired website showcasing the iPhone 17 Pro with premium design, smooth animations, and interactive features.

## 🚀 Live Demo

**[View Live Website](https://your-deployment-url.com)**

## ✨ Features

### 🎨 **Premium Design**
- **Apple-inspired aesthetics** with clean, minimalist design
- **Dark theme** with elegant gradients and glowing effects
- **Responsive layout** optimized for all devices
- **Modern typography** with Apple-style fonts

### 🎭 **Interactive Elements**
- **3D phone rotation** with parallax effects
- **Smooth GSAP animations** throughout the site
- **Interactive comparison slider** between iPhone 16 Pro and 17 Pro
- **Floating light effects** that respond to cursor movement
- **Hover animations** and micro-interactions

### 📱 **Key Sections**
- **Hero Section**: Fullscreen showcase with video background
- **Features**: Detailed feature cards with specs and icons
- **Performance**: A17 Bionic Ultra chip showcase
- **Camera**: LightRay AI Zoom technology
- **Comparison**: Side-by-side table with iPhone 16 Pro vs 17 Pro
- **CTA**: Call-to-action with animated buttons

### 🛠 **Technical Features**
- **React 18** with modern hooks and components
- **Tailwind CSS** for utility-first styling
- **GSAP** for smooth animations and scroll effects
- **Three.js** for 3D elements (if applicable)
- **Responsive design** with mobile-first approach

## 🖼️ Screenshots

### Desktop View
![Desktop Hero Section](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

### Mobile View
![Mobile Responsive](https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)

### Comparison Section
![Comparison Table](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/iphone-17-pro-website.git
   cd iphone-17-pro-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx              # Hero section with 3D phone
│   ├── Features.jsx          # Feature showcase cards
│   ├── Performance.jsx       # Performance section
│   ├── Camera.jsx            # Camera technology showcase
│   ├── ComparisonSlider.jsx  # iPhone comparison table
│   ├── CTA.jsx               # Call-to-action section
│   ├── Navbar.jsx            # Navigation bar
│   ├── Footer.jsx            # Footer with links
│   └── ...
├── constants/
│   └── index.js              # App constants and data
├── utils/
│   ├── animations.js         # GSAP animation utilities
│   └── index.js              # Utility functions
├── App.jsx                   # Main app component
└── main.jsx                  # App entry point
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradients (`blue-600`, `blue-700`)
- **Background**: Dark theme (`gray-950`, `gray-900`, `black`)
- **Text**: White and light grays for contrast
- **Accents**: Purple, green, and orange for feature highlights

### Typography
- **Font Family**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Headings**: Bold weights with tracking adjustments
- **Body Text**: Medium to semibold for readability

### Animations
- **GSAP**: Smooth scroll-triggered animations
- **Hover Effects**: Scale transforms and color transitions
- **Parallax**: Background and element movement on scroll

## 🔧 Customization

### Adding New Features
1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Add any new constants to `src/constants/index.js`

### Styling Changes
- Modify Tailwind classes in component files
- Update color scheme in `tailwind.config.js`
- Add custom animations in `src/utils/animations.js`

### Content Updates
- Update text content in component files
- Modify comparison data in `ComparisonSlider.jsx`
- Change feature specifications in `Features.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The project can be deployed to any static hosting service that supports Vite builds.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Apple Inc.** for design inspiration
- **GSAP** for amazing animation capabilities
- **Tailwind CSS** for utility-first styling
- **Unsplash** for high-quality images

## 📞 Contact

**Built with ❤️ by [wolde.dev](https://wolde.dev)**

- **Website**: [wolde.dev](https://wolde.dev)
- **Email**: contact@wolde.dev
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

⭐ **Star this repository if you found it helpful!**
