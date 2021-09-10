import { useState } from 'react'
import './style.scss'

const handleInput = () => {}

const Field = (props) => {
    return(
        <div>
            <label htmlFor={props.id}>{}</label>
            <input type={props.type} name={props.name} id={props.id} onChange={handleInput} />
        </div>
    )
}

export default () => {
    return(
        <form action="">
            <Field id="title" name="title" type="text" />
        </form>
    )
}