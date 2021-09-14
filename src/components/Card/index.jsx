import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import Modal from '../Modal'

export default props => {
    const [open, setOpen] = useState()
    const modalOpen = () => setOpen(true)
    const modalClose = () => setOpen(false)

    return(
        <div className="task-container" title={ props.item.description }>
            <Link to={`/view/${props.item._id}`}>{ props.item.title }</Link>
            <div className="task-container-icons">
                <Link to={`/edit/${props.item._id}`}><FontAwesomeIcon icon={ faEdit } /></Link>
                <Link to="#" onClick={ modalOpen }>
                    <FontAwesomeIcon icon={ faTrash } />
                </Link>
                <Modal show={ open } onClose={ modalClose } title={ props.item.title } taskID={ props.item._id } />
            </div>
        </div>
    )
}