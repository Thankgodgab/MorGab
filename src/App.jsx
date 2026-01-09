import React from 'react'
import Header from './components/molecules/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/molecules/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="w-full h-screen bg-mg-offwhite font-primary overflow-x-hidden">
            <Header />
            <main className='relative pt-25'>
                {/* Main content of Each Page goes here */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>  
    )
}

export default App