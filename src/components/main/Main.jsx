import Recommendation from '../main components/recommendation/Recommendation'
import './Main.css'

function Main() {
    return (
        <main>
            {/* SEÇÃO DE INTRODUÇÃO */}
            <section className="container-xl main__intro">
                {/* Banner do Filme Barbie */}
                <div className="main__banner">
                    <img src="./public/imgs/logo-escura.png" alt="Logo do Filme da barbie"/>
                </div>
                <div className="main__content">
                    <div className="main__film-info">
                        <h2>
                            Barbie <span>(2023)</span>
                        </h2>
                        <div className="main__section">
                            <h3>Gênero:</h3>
                            <p>Comédia, Aventura, Fantasia</p>
                        </div>
                        <div className="main__section">
                            <h3>Sinopse:</h3>
                            <p>No mundo mágico das Barbies, "Barbieland", uma das bonecas começa a perceber que não se encaixa como as outras. Depois de ser expulsa, ela parte para uma aventura no "mundo real", onde descobre que a beleza está no interior de cada um.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col ps-0">
                                <div>
                                    <h3>Dirigido por:</h3>
                                    <p>Greta Gerwig</p>
                                </div>
                                <div>
                                    <h3>Situação:</h3>
                                    <p>Lançado</p>
                                </div>
                                <div>
                                    <h3>Orçamento:</h3>
                                    <p>$145,000,000.00</p>
                                </div>
                            </div>
                            <div className="col ps-0">
                                <div>
                                    <h3>Escrito por:</h3>
                                    <p>Greta Gerwig, Noah Baumbach</p>
                                </div>
                                <div>
                                    <h3>Idioma original:</h3>
                                    <p>Inglês</p>
                                </div>
                                <div>
                                    <h3>Receita:</h3>
                                    <p>$1,280,313,193.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*SEÇÃO DE ELENCO*/} 
            <section className="main__cast">
                <div className="container-xl main__cast-content">
                    <div className="cast__header mb-3">
                        <h2 className="cast__title fw-bold mb-0">Elenco</h2>
                        <a href="#" className="button__link">Ver mais</a>
                    </div>
                    <div className="cast__carousel">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <img src="./public/imgs/1.png" alt="Elenco 1"/>
                                <div className="item__container">
                                    <h3>Margot Robbie</h3>
                                    <p>Barbie</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./public/imgs/2.png" alt="Elenco 2"/>
                                <div className="item__container">
                                    <h3>Ryan Gosling</h3>
                                    <p>Ken</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./public/imgs/3.png" alt="Elenco 3"/>
                                <div className="item__container">
                                    <h3>America Ferrera</h3>
                                    <p>Gloria</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./public/imgs/4.png" alt="Elenco 4"/>
                                <div className="item__container">
                                    <h3>Simu Liu</h3>
                                    <p>Ken</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./public/imgs/5.png" alt="Elenco 5"/>
                                <div className="item__container">
                                    <h3>Ariana Greenblatt</h3>
                                    <p>Sasha</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./public/imgs/6.png" alt="Elenco 6"/>
                                <div className="item__container">
                                    <h3>Kate McKinnon</h3>
                                    <p>Weird Barbie</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./public/imgs/7.png" alt="Elenco 7"/>
                                <div className="item__container">
                                    <h3>Asha Leo</h3>
                                    <p>Barbie</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./public/imgs/8.png" alt="Elenco 8"/>
                                <div className="item__container">
                                    <h3>Hari Nef</h3>
                                    <p>Barbie</p>
                                </div>
                            </div>
                            <div className="item">
                                <img src="./public/imgs/9.png" alt="Elenco 9"/>
                                <div className="item__container">
                                    <h3>Tommy Dorfman</h3>
                                    <p>Ken</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reviews container-xl">
                <div className="reviews__content">
                    <div className="reviews__header"></div>
                    <div className="reviews__grid">
                        <div className="reviews__item">
                            <article className="review-card">
                                <p>Um filme super divertido, muito engraçado e reflexivo acerca da vida e da nossa sociedade. Em sua grande maioria, apresenta críticas pontuais, bem escritas e muito inteligentes, porém, há momentos em que essas críticas se tornam repetitivas, o que foi um pequeno e praticamente único problema para mim. De resto, é tudo perfeito, as atuações estão impecáveis, Ryan Gosling e Margot Robbie estão incríveis, a direção de Greta Gerwig também é ótima. É um filme que acert...</p>
                                <p className="review-card__author">por <strong>Hementon Renner</strong></p>
                                <div className="review-card__footer">
                                    <p>21 de julho de 2023</p>
                                    <p>Nota: <strong>9</strong>/10</p>
                                </div>
                            </article>
                        </div>
                        <div className="reviews__item">
                            <article className="review-card">
                                <p>Título: Uma Celebração Encantadora e Empoderadora - "Barbie" (2023) <br></br><br></br>Barbie" é uma adorável surpresa cinematográfica que honra o icônico ícone cultural que é a boneca Barbie. Sob a brilhante interpretação de Margot Robbie, o filme é um verdadeiro deleite, repleto de charme, humor e vulnerabilidade, o que torna Robbie uma escolha perfeita para dar vida à amada boneca...</p>
                                <p className="review-card__author">por <strong>Achilles</strong></p>
                                <div className="review-card__footer">
                                    <p>26 de julho de 2023</p>
                                    <p>Nota: <strong>10</strong>/10</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <Recommendation />
            
        </main>
    );
}

export default Main