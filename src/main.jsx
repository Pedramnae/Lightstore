import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Lamp from './components/Lamp.jsx'
import Outdoorlightning from './components/Outdoorlightning.jsx'
import Lightsources from './components/Lightsources.jsx'
import Accessories from './components/Accessories.jsx'
import Bathroomlightning from './components/Bathroomlightning.jsx'
import Smarthome from './components/Smarthome.jsx'
import Info from './components/info.jsx'
import Checkout from './components/Checkout.jsx'
import Userpage from './components/Userpage.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Lamp' element={<Lamp />} />
        <Route path='/Outdoor-lightning' element={<Outdoorlightning />} />
        <Route path='/Lightsources' element={<Lightsources />} />
        <Route path='/Accessories' element={<Accessories />} />
        <Route path='/Bathroom-lightning' element={<Bathroomlightning />} />
        <Route path='/Smart-home' element={<Smarthome />} />
        <Route path='/Info' element={<Info />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Userpage' element={<Userpage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
