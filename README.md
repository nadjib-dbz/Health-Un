# Health'un - Your Path to Wellness

![Health'un Logo](public/favicon.svg)

Health'un is a comprehensive wellness platform designed for Algerians, combining trusted health information, personalized wellness plans, and a marketplace for bio products.

**Note: This is a private project developed for InjazElJazair.**

## 🌿 About Health'un

Health'un combines local expertise with global wellness standards to provide a complete health ecosystem for Algerians. Our platform connects users with verified health content, personalized wellness plans, and quality bio products from local producers, all in one place.

## ✨ Features

- **Personalized Health Plans**: Get customized wellness recommendations tailored to your unique needs, goals, and preferences.
- **Trusted Health Information**: Access verified, science-backed health content reviewed by medical professionals.
- **Expert Health Guidance**: Learn from Algeria's top health experts with regularly updated tips and insights.
- **Bio Product Marketplace**: Shop certified organic and natural products from verified local producers.
- **Dark/Light Mode**: Seamless theme switching for comfortable viewing in any environment.
- **Responsive Design**: Fully optimized for all devices from mobile to desktop.

## 🚀 Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Context API
- **Meta Tags**: React Helmet

## 📋 Pages

- **Home**: Introduction to Health'un and its main features
- **Health Plan**: Personalized health plan generator based on user inputs
- **Health Info**: Evidence-based health articles and information
- **Marketplace**: Shop for bio products from verified local producers
- **About Us**: Information about the Health'un team and mission
- **Auth**: Login and signup functionality
- **Cart**: Shopping cart for marketplace purchases

## 🛠️ Project Structure

```
health-un-wellness/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── health-info/  # Health information components
│   │   ├── health-plan/  # Health plan components
│   │   ├── home/         # Homepage components
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   └── marketplace/  # Marketplace components
│   ├── context/          # React Context providers
│   ├── data/             # Mock data for the application
│   ├── pages/            # Page components
│   ├── App.tsx           # Main App component with routes
│   ├── index.css         # Global styles
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository from the private InjazElJazair repository:
   ```bash
   git clone <private-repository-url>
   cd health-un-wellness
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📦 Build for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## 🧪 Linting

To run the linter:

```bash
npm run lint
# or
yarn lint
```

## 🎨 Design System

Health'un uses a consistent design system with:

- **Typography**:
  - Headings: Poppins (500, 600, 700)
  - Body: Inter (400, 500, 600)

- **Colors**:
  - Primary: Teal-based palette
  - Neutrals: Gray scale
  - Accents: Success (green), Warning (yellow), Error (red)

- **Components**:
  - Cards
  - Buttons
  - Form elements
  - Navigation
  - Modals

## 🌙 Dark Mode

Health'un supports both light and dark modes. The theme can be toggled via the theme switcher in the navigation bar.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktops

## 🔮 Future Enhancements

- User authentication with JWT
- Backend integration with Node.js/Express
- Database integration with MongoDB
- Payment gateway integration
- User profile management
- Health tracking features
- Community forums

## 🤝 Contributing

This is a private project for InjazElJazair. Contributions should follow the organization's internal guidelines.

## 📄 License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## 👥 Team

Health'un was created by a team of passionate developers and health enthusiasts at InjazElJazair committed to improving wellness in Algeria.

---

Made with ❤️ for a healthier Algeria | © 2024 InjazElJazair
