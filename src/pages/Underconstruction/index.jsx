import {} from 'react'
import './style.scss'
import image from '../../assets/images/underconstruction.png'

export default function(){
    return(
        <main>
            <h3>Projeto Insonia</h3>
            <hr/>
            <img src={image} alt="Underconstruction image" />
            <hr />
        </main>
    )
}