import React from 'react'
import "./style.css"
import logo from "./assets/logoStreet.png"
import { Link } from 'react-router-dom'

function Cadastro() {
    return (
        <div className="section-cadastro">
            <div className='container-cadastro'>
                <div className="section-logo-cadastro">
                    <img src={logo} alt="" />
                    <h2>Cadastrar</h2>
                </div>
                <div className="input-cadastro">
                    <div className="section-input-cadastro">
                        <p>Nome:</p>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="section-input-cadastro">
                        <p>E-mail:</p>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="section-input-cadastro">
                        <p>Senha:</p>
                        <input type="password" name="" id="" />
                    </div>
                </div>
                <div className="section-btn-cadastro">
                    <Link to="/Login">
                        <p>Pronto</p>
                    </Link>
                </div>
                <div className="section-senha-cadastro">
                    <Link to="/Login">
                        <p>Já tenho cadastro</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cadastro