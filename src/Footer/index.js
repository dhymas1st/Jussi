import React from 'react';
import './footer.scss'
import WppCompany from '../img/wppcompany.png'
import Facebook from '../img/facebook.svg'
import Instagram from '../img/instagram.svg'
import Linkedin from '../img/linkedin.svg'



function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="wpp-company">
                    <img src={WppCompany} alt="" />
                </div>
                <div className="socialmedia">
                    <div className="socialmedia-img">
                        <a href="https://www.facebook.com/agencia.jussi/" target="_blank" rel="noopener noreferrer"> 
                            <img src={Facebook} alt="" />
                        </a>
                    </div>
                    <div className="socialmedia-img">
                        <a href="https://www.instagram.com/jussi/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="" />
                        </a>
                    </div>
                    <div className="socialmedia-img">
                        <a href="https://www.linkedin.com/company/agencia-jussi/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;