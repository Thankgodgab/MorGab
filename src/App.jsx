import React from 'react'
import Header from './Components/molecules/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Team from './Pages/Team'
import Contact from './Pages/Contact'
import Footer from './Components/molecules/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="w-full h-screen bg-mg-offwhite font-primary overflow-x-hidden">
            <Header />
            <main className='relative'>
                {/* Main content of Each Page goes here */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App