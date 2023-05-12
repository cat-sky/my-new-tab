// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'reset.css'
import '@/assets/styles/theme.scss'
import './App.css'
import IndexRoute from './components/routes/IndexRoute'
import Footer from './components/footer/footer'
import { Link } from 'react-router-dom'
import SearchBox from './components/search-box'
function App() {
    // const [count, setCount] = useState(0)
    
    return (
        <div className="app theme-dark">
            <Link to='/'>home</Link>|
            <Link to={'user'}>user</Link>|
            <Link to={'about'}>about</Link>|
            <Link to={'set'}>set</Link>|
            <SearchBox/>
            <IndexRoute/>
            <Footer/>
        </div>
    )
}

export default App
