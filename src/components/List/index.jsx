import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import Card from '../Card/'
import Api from '../../service/api'

export default props => {

    const [list, setList] = useState([])

    useEffect( async() => {
        const response = await Api.getAll()
        const results = await response.json()
        setList(await results.data)
    }, [])

    return(
        <section className="tasks">
            <h2>Lista de Tarefas</h2>
            <hr />
            <Link to="/add" className="btn-add">
                <FontAwesomeIcon icon={ faPlusCircle } />
            </Link>
            <div className="list">
                {list.map(item => (
                    <Card item={ item } key={ item._id } history={ props.history } />
                ))}
            </div>
        </section>
    )
}