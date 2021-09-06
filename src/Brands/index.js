import React from 'react';
import './brands.scss'

import Brastemp from '../img/logo-brastemp.png'
import CompraCerta from '../img/logo-compra.png'
import Consul from '../img/logo-consul.png'
import TheBar from '../img/logo-thebar.png'


function Brands() {
    return (
        <div className="brands">
            <div className="container">
                <div className="brand-title">
                    <p>Nossas principais lojas VTEX</p>
                </div>
                <div className="brand-icon">
                    <p>→</p>
                </div>
                <div className="brand">
                    <img src={Brastemp} alt="Brastemp" />
                </div>
                <div className="brand">
                    <img src={CompraCerta} alt="Compra Certa" />
                </div>
                <div className="brand">
                    <img src={Consul} alt="Consul" />
                </div>
                <div className="brand">
                    <img src={TheBar} alt="TheBar" />
                </div>

            </div>
        </div>
    );
};

export default Brands;