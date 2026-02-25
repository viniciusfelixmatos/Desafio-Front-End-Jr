import './Footer.css'

function Footer() {
    return  (
        <>
        <footer>
            <div className="footer__container d-flex flex-row flex-wrap container-xl">
                <div className="footer__logo">
                    <img src="/imgs/logo-escura.png"></img>
                </div>
                <nav className="footer__nav">
                    <div className="footer-ul__container">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 footer__row">
                            <div className="col footer__column d-flex flex-column">
                                <a href="#">Sobre</a>
                                <a href="#">Contato</a>
                                <a href="#">Suporte</a>
                            </div>
                            <div className="col footer__column d-flex flex-column">
                                <a href="#">Adicione um Filme</a>
                                <a href="#">Adicione uma Série</a>
                                <a href="#">Discussões</a>
                            </div>
                            <div className="col footer__column d-flex flex-column">
                                <a href="#">Termos de Uso</a>
                                <a href="#">Política de Privacidade</a>
                                <a href="#">Diretrizes</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
        </>
    )
}

export default Footer