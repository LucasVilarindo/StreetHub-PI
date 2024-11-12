import React from 'react'
import "./style.css"
import logo from "./assets/logoStreet.png"
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="section-login">
            <div className='container-login'>
                <div className="section-logo-login">
                    <img src={logo} alt="" />
                    <h2>Faça o Login</h2>
                </div>
                <div className="input">
                    <div className="section-input">
                        <p>E-mail:</p>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="section-input">
                        <p>Senha:</p>
                        <input type="password" name="" id="" />
                    </div>
                </div>
                <div className="section-btn">
                    <Link to="/">
                        <p>Entrar</p>
                    </Link>
                </div>

                <div className="section-senha">
                    <p>Esqueceu a senha?</p>
                    <Link to="/Cadastro">
                        <p>Fazer Cadastro</p>
                    </Link>
                </div>
            </div >
        </div >
    )
}

export default Login