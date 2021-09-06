import { useState } from 'react'
import './Form.scss'

const handleInput = () => {}

const Field = (props) => {
    <div>
        <label htmlFor={props.id}>{props.name}</label>
        <input type={props.type} name={props.name} id={props.id} onChange={handleInput} />
    </div>
}

export default function Form(props){
    const [name, setName] = useState()

    if(!!props) 
        return(
            <form action="">
                <Field id=""/>
            </form>
        )
    else
        return(
            <form action="">

            </form>
        )
}