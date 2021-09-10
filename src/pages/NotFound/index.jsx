import './style.scss'
import notFound from '../../assets/images/notFound.png'

export default () => {
    return(
        <section className="notFound">
            <h3>Opss... Página não encontrada!</h3>
            <p>Você está tentando acessar uma página que não está disponível. 
                Favor verifique a URL passada ou entre em contato para comunicar alguma anomalia.</p>
            <img src={notFound} alt="Imagem página não encontrada" />
        </section>
    )
}