import React from 'react'
import "./style.css"

export default function CardRoupas({ dados }) {
    return (
        <div>
            <div className='container-roupas'>
                <img src={dados.imagem} alt="" />
                <h2>{dados.titulo}</h2>
                <p>{dados.descricao}</p>
            </div>
        </div>
    )
}
