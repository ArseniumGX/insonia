import {} from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Underconstruction from './pages/Underconstruction'

// Mesma coisa que acima usando arrow function
export default (() => 
    <BrowserRouter>
        <Underconstruction />
        <Footer />
    </BrowserRouter>
)
