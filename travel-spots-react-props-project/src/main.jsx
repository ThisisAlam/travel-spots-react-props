import { createRoot } from "react-dom/client"

import App from "./App.jsx"
import "./UI-CSS/App.css"

import "./UI-CSS/main.css" /*main css style sheet*/

const root = createRoot(document.getElementById('root'))
root.render(
  <div className="app">
    <App />
  </div>
)