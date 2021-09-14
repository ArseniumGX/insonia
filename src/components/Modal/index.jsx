import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import api from '../../service/api'

export default props => {
    const id = props.taskID
    
    if(!props.show){
        return null
    }

    const handleBtnDelete = async() => {
        await api.delete(id)
        location.assign('/')
    }

    return(
        <div className="modal" onClick={ props.onClose }>
            <div className="modal-content" onClick={ e => e.stopPropagation() }>
                <h3>Confirmação de Deleção</h3>
                <hr />
                <p>Tem certeza que deseja deletar a tarefa <strong>{ props.title }</strong> ?</p>
                <div className="buttons">
                    <span onClick={ handleBtnDelete }>
                        <FontAwesomeIcon icon={ faCheckCircle } />
                    </span>
                    <span onClick={ props.onClose }>
                        <FontAwesomeIcon icon={ faTimesCircle } />
                    </span>
                </div>
            </div>
        </div>
    )
}