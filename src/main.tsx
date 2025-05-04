
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeDatabase } from './lib/initDb'

// Initialize database connection
initializeDatabase()
  .then(() => {
    console.log("Database connection initialized");
  })
  .catch((err) => {
    console.error("Failed to initialize database:", err);
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
