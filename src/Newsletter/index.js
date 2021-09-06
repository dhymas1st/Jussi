import React from 'react';
import './newsletter.scss';

function Newsletter(){
    return (
        <>
            <div className="news">
                <div className="container">
                    <h3>Receba novidades da nossa área <br />de produtos digitais.</h3>
                    <form>
                        <input type="email" name="email" id="email" placeholder="Didite seu e-mail"   />
                        <button type="submit" className="register-btn">Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Newsletter;