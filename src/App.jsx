import {} from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Movies  from './pages/Movies'
import Underconstruction from './pages/Underconstruction'

export default function App(){
    return(
        <BrowserRouter>
            <Underconstruction />
        </BrowserRouter>
    )
}