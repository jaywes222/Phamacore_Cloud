# phAMACore Cloud Activation

## Overview

The **phAMACore Cloud Activation** project is a web application designed to facilitate user registration and subscription activation for the phAMACore cloud platform. It provides a form for users to input their details, validates the inputs, and interacts with the backend to activate their subscriptions.

## Features

- **User Registration Form:** Users can input their email, username, password, and phone number.
- **Form Validation:** All input fields are validated using `react-hook-form` and `zod`, with custom error messages.
- **API Integration:** The application fetches company details and activates subscriptions via API requests.
- **Dynamic Customer Code Handling:** The application dynamically handles customer codes from URL parameters.
- **Loading and Error States:** Users are provided feedback during data fetching and form submission, with appropriate error messages and loading indicators.
- **Notifications:** Success and error notifications are displayed using `react-toastify`.
- **Form Reset:** The form resets its input fields upon error, allowing users to re-enter correct information.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling in-app routing and navigation.
- **React Hook Form**: A library for managing form state and validation in React.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Toastify**: For displaying toast notifications.
- **Tailwind CSS**: For styling the application.
- **Vite**: A fast build tool and development server.

## Installation

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above) or yarn

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jaywes222/Phamacore_Cloud.git
   cd Phamacore_Cloud

2. **Install Dependencies:**
   ```bash
   npm install

3. **Running the App:**
   ```bash
   npm run dev

4. **Build the project for production:**
   ```bash
   npm run build

## Project Structure

├── public               # Public assets (e.g., images, index.html)
├── src
│   ├── assets           # Images and static assets
│   ├── components       # React components
│   ├── pages            # React pages
│   ├── App.jsx          # Main application component
│   ├── index.jsx        # Entry point for React
│   └── styles           # Global styles (if any)
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration file

## Acknowledgements
.React Hook Form for making form management easy.
.Zod for robust and type-safe schema validation.
.Axios for seamless HTTP requests.
.React Toastify for smooth notification management.
.Tailwind CSS for rapid and modern styling.



