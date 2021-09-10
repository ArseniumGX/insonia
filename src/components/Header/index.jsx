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
            <h2>Blue EdTech - Módulo 3 (Fullstack)</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/">Adicionar</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
