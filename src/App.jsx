import {} from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Underconstruction from './pages/Underconstruction'

export default () => (
    <BrowserRouter>
        <Underconstruction />
    </BrowserRouter>
)
