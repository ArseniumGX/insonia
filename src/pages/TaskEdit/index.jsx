import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import api from '../../service/api'
import moment from 'moment'

export default function(props){
    const { id } = props.match.params
    const [fields, setFields] = useState('')

    useEffect(async() => {
        const response = await api.getOne(id)
        const result = await response.json()
        setFields(result.data)
    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault()

        const response = await api.update(fields, id)
        props.history.push('/')
    }

    const handleFields = e => {
        const auxField = { ...fields }
        auxField[e.target.name] = e.target.value
        setFields(auxField)
    }


    return( 
        <section className='edit'>
            <h3>Editação de tarefa</h3>
            <form onSubmit={ handleSubmit }>
                <div className="title">
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" id="title" value={ fields.title || '' } onChange={ handleFields } />
                </div>
                
                <div className="description">
                    <label htmlFor="description">Descrição</label>
                    <textarea name="description" id="description" maxLength="120" value={ fields.description } onChange={ handleFields } ></textarea>
                </div>

                <div className="box-radio">
                    <div className="box-radio-content">
                        <label className="header">Prioridade</label>
                        <div className="box-radio-content-items">
                            <div>
                                <label htmlFor="low">Baixa</label>
                                <input type="radio" name="priority" id="low" value="baixa" checked={ fields.priority === 'baixa' ? true : false } onChange={ handleFields } />
                            </div>
                            <div>
                                <label htmlFor="mid">Média</label>
                                <input type="radio" name="priority" id="mid" value="media" checked={ fields.priority === 'media' ? true : false } onChange={ handleFields } />
                            </div>
                            <div>
                                <label htmlFor="high">Alta</label>
                                <input type="radio" name="priority" id="high" value="alta" checked={ fields.priority === 'alta' ? true : false } onChange={ handleFields } />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="box-radio-content">
                        <label className="header">Status</label>
                        <div className="box-radio-content-items">
                            <div>
                                <label htmlFor="pending">Fazer</label>
                                <input type="radio" name="status" id="pending" value="fazer" checked={ fields.status === 'fazer' ? true : false } onChange={ handleFields } />
                            </div>
                            <div>
                                <label htmlFor="making">Fazendo</label>
                                <input type="radio" name="status" id="making" value="fazendo" checked={ fields.status === 'fazendo' ? true : false } onChange={ handleFields } />
                            </div>
                            <div>
                                <label htmlFor="done">Feito</label>
                                <input type="radio" name="status" id="done" value="feito" checked={ fields.status === 'feito' ? true : false } onChange={ handleFields } />
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr />

                <div className="deadline">
                    <label htmlFor="deadline">Prazo</label>
                    { console.log(fields.deadline) }
                    <input type="date" name="deadline" id="deadline" value={ moment(fields.deadline).format('YYYY-MM-DD') || '' } onChange={ handleFields } />
                </div>

                <div className="buttons">
                    <button type="submit">Alterar</button>
                    <Link to="/">Cancelar</Link>
                </div>
            </form>
        </section>
    )
}