import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment, { locale } from 'moment'
import api from '../../service/api'
import './style.scss'
import Modal from '../../components/Modal'

export default props => {
    const { id } = props.match.params
    const [info, setInfo] = useState({})

    const [open, setOpen] = useState()
    const modalOpen = () => setOpen(true)
    const modalClose = () => setOpen(false)

    useEffect(async() => {
        const response = await api.getOne(id)
        if(response.status === 400)
            location.assign('/notfound')
        
            const result = await response.json()
        const data = result.data
        console.log(response.status)
        setInfo({...data})
    }, [])

    return(
        <section className="view-task">
            <h2>Informação da Tarefa</h2>
            <div className="task-container">
                <h3>{info.title || ''}</h3>
                <p className="description">{info.description || ''}</p>
                <p><strong>Prioridade:</strong> {info.priority || ''}</p>
                <p><strong>Status:</strong> {info.status || ''}</p>
                <p><strong>Prazo:</strong> {moment(info.deadline).format('DD / MM / YYYY') || ''}</p>
                <div className="task-buttons">
                    <Link to={`/edit/${id}`}>Editar</Link>
                    <Link to='#' onClick={ modalOpen }>Excluir</Link>
                </div>
            </div>
            <Modal show={ open } onClose={ modalClose } title={ info.title } taskID={ id } />
        </section>
    )
}