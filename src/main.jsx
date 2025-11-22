import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'   /* <--- NOSSO ESTILO GLOBAL */
import './components/ui/ui.css' /* <--- NOSSO UI KIT */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)