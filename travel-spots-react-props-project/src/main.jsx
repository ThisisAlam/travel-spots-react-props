import { createRoot } from "react-dom/client"
import { App } from "./App.jsx"
import "./main.css"

const root = createRoot(document.getElementById('root'))
root.render(
  <div className="app">
    <App />
  </div>
)