import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import Api from '../../service/api'

export default () => {

    const [list, setList] = useState()

    useEffect( async() => {
        const response = await Api.getAll()
        const results = await response.json()

        console.log(results.data)
        setList(results.data)
    }, [])

    return(
        <div>
            {list.map(item => (
                'kks'
            ))}
        </div>
    )
}