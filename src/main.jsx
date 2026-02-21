import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Function to get the user's color scheme preference
const getThemePreference = () => {
  // Check if there's a stored preference in localStorage
  const storedPreference = localStorage.getItem('theme');
  if (storedPreference) {
    return storedPreference;
  }
  
  // Otherwise, use the browser's preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Apply theme on initial load
const applyTheme = () => {
  const theme = getThemePreference();
  const html = document.documentElement;
  
  // Remove both classes first
  html.classList.remove('light', 'dark');
  
  // Add the appropriate class
  html.classList.add(theme);
  
  // Store the preference
  localStorage.setItem('theme', theme);
};

// Apply theme immediately to prevent flash
applyTheme();

// Listen for changes in browser color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  // Only update if there's no stored preference
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
