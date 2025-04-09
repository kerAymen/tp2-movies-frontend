import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from "./App"
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
)
