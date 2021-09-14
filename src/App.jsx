import {} from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Add from './pages/Add'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Test from './pages/Test'

// puxar o Link no component header para criação do menu (react-router-dom)

export default () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/add" component={ Add } />
            <Route exact path="/edit/:id" component={ Edit } />
            <Route exact path="/test" component={ Test } />
            <Route path="*" component={ NotFound } />
        </Switch>
        <Footer />
    </BrowserRouter>
)
