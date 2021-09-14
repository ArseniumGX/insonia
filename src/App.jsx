import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import TaskAdd from './pages/TaskAdd'
import TaskEdit from './pages/TaskEdit'
import TaskView from './pages/TaskView'

// puxar o Link no component header para criação do menu (react-router-dom)

export default () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/add" component={ TaskAdd } />
                <Route exact path="/edit/:id" component={ TaskEdit } />
                <Route exact path="/view/:id" component={ TaskView } />
                <Route path="*" component={ NotFound } />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
