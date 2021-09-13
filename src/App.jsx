import {} from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Underconstruction from './pages/Underconstruction'
import NotFound from './pages/NotFound'
import Add from './pages/Add'
import Home from './pages/Home'

// puxar o Link no component header para criação do menu (react-router-dom)

export default () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={Add} />
            <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
)
