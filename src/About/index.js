import React from 'react';
import './about.scss'
import ImageJussi from '../img/image-jussi.png'


function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="content">
                    <h2>Olá, somos<br /> a Jüssi</h2>
                    <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
                    <div className="btn">
                        <a href="/">Conheça a Jüssi</a>
                    </div>
                </div>
                <div className="image-jussi">
                    <img src={ImageJussi} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;

