import { useState, history } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import api from '../../service/api'

export default (props) => {

    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            const response = await api.create(fields)
            props.history.push('/')
        }
        catch(err){
            console.log(err)
        }
    }

    const handleFields = e => {
        const auxField = { ...fields }
        auxField[e.target.name] = e.target.value
        setFields(auxField)
    }

    const [fields, setFields] = useState({})

    return( 
        <section className='add'>
            <h3>Adicionar nova tarefa</h3>
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
                                <input type="radio" name="priority" id="low" value="low" onChange={ handleFields } />
                            </div>
                            <div>
                                <label htmlFor="mid">Média</label>
                                <input type="radio" name="priority" id="mid" value="mid" onChange={ handleFields } />
                            </div>
                            <div>
                                <label htmlFor="high">Alta</label>
                                <input type="radio" name="priority" id="high" value="high" onChange={ handleFields } />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="box-radio-content">
                        <label className="header">Status</label>
                        <div className="box-radio-content-items">
                            <div>
                                <label htmlFor="pending">Fazer</label>
                                <input type="radio" name="status" id="pending" value="pending" onChange={ handleFields } />
                            </div>
                            <div>
                                <label htmlFor="making">Fazendo</label>
                                <input type="radio" name="status" id="making" value="making" onChange={ handleFields } />
                            </div>
                            <div>
                                <label htmlFor="done">Feito</label>
                                <input type="radio" name="status" id="done" value="done" onChange={ handleFields } />
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr />

                <div className="deadline">
                    <label htmlFor="deadline">Prazo</label>
                    <input type="date" name="deadline" id="deadline" value={ fields.deadline || '' } onChange={ handleFields } />
                </div>

                <div className="buttons">
                    <button type="submit">Cadastrar</button>
                    <Link to="/">Cancelar</Link>
                </div>
            </form>
        </section>
    )
}