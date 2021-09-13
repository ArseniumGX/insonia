import {} from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default props => {
    (
        <div className="task-container">
            <h3>{props.title}</h3>
        </div>
    )
}