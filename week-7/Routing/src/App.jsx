import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))
const Navbar = React.lazy(() => import('./components/Navbar'))
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/" element={<Landing />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App