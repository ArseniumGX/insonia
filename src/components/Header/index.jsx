import {} from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import logo from '../../assets/images/insonia-logo.png'


export default function Header(){
    return(
        <header>
            <div className="headers">
                <img src={logo} alt="Logo projeto Insonia" />
                <h1>Projeto Insonia</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
