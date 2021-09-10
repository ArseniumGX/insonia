import {} from 'react'
import './style.scss'
import image from '../../assets/images/underconstruction.png'

export default function(){
    return(
        <main>
            <img src={image} alt="Underconstruction image" />
            <hr />
        </main>
    )
}