// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'reset.css'
import '@/assets/styles/theme.scss'
import './App.scss'

import defaultBgImg from "@/assets/default-bg-img.jfif";

import IndexRoute from './components/routes/IndexRoute'
import Footer from './components/footer/footer'
import { Link } from 'react-router-dom'

import Header from './components/header/header'
import Background from './components/background'
function App() {
    // const [count, setCount] = useState(0)
    
    return (
        <div className="app theme-dark">
            <Header/>
            <div className="container">
                <IndexRoute/>
            </div>
            <Footer/>
            <Background
            type='img'
            url={defaultBgImg}
            />
        </div>
    )
}

export default App
