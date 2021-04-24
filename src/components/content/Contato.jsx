import React from 'react'
import './Contato.css'
import Facebook from '../logos/facebook.png'
import Instagram from '../logos/instagram.png'

const Contato = () => {
    return (
        <div className="Contato">

            <div className="Card">

                <h1>Contato</h1>

                <a href='https://www.facebook.com/bspgeradores/'>
                    <label>Facebook</label>
                    <img src={Facebook}></img>
                </a>
                <br />

                <a href='https://www.instagram.com/meudeusraul/?igshid=1qhgc309p6vuz'>
                    <label>Instagram</label>

                    <img src={Instagram}></img>
                </a>
                <h1>Rua Padre Pedro Guerra, 433 - Rio Pequeno, São José dos Pinhais - PR </h1>



            </div>
            <div>

            </div>
            <div className="background">
            </div>

        </div >
    )

}
export default Contato