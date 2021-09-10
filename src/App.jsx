import {} from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Underconstruction from './pages/Underconstruction'
import Add from './pages/Add'

export default () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Underconstruction} />
            <Route path="/add" component={Add} />
        </Switch>
        <Footer />
    </BrowserRouter>
)
