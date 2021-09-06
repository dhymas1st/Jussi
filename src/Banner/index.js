import React from 'react';
import './banner.scss';
import Product1 from '../img/prod1.png';
import Product2 from '../img/prod2.png';
import Product3 from '../img/prod3.png';

function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="content">
                    <h1>Criamos lojas que vendem mais.</h1>
                    <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
                    <div className="solutions-btn">
                        <a href="/">Veja nossas soluções</a>
                    </div>
                </div>
                <div className="content-cards">
                    <div className="card-prod card1">
                        <img className="size-card1" src={Product1} alt="" />
                        <div className="btn-card">
                            <a href="/">Comprar em 12x</a>
                        </div>
                    </div>
                    <div className="card-prod card2">
                        <img className="size-card2" src={Product2} alt="" />
                        <div className="btn-card">
                            <a href="/">Mais Detalhes</a>
                        </div>
                    </div>
                    <div className="card-prod card3">
                        <img className="size-card3" src={Product3} alt="" />
                        <div className="btn-card">
                        <a href="/">
                                Mais Detalhes
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;