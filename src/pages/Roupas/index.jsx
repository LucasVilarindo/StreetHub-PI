import React from 'react'
import "./style.css"
import CardRoupas from '../../components/cardRoupas'
import Camisa01 from './assets/camisa01.png'
import camisa02 from './assets/camisa02.png'
import camisa03 from './assets/camisa03.png'
import jaqueta01 from './assets/jaqueta01.png'
import calca01 from './assets/calca01.png'
import blusa01 from './assets/blusa01.png'

function Roupas() {
    const dataCardRoupas = [
        {
            imagem: Camisa01,
            titulo: "Camiseta Nike",
            descricao: "R$ 159,90"
        },

        {
            imagem: camisa02,
            titulo: "Camiseta Nike",
            descricao: "R$ 159,90"
        },
        
        {
            imagem: blusa01,
            titulo: "PUMA X BADTTW WOVEN JACKET",
            descricao: "R$ 564,00"
        },

        {
            imagem: calca01,
            titulo: "PUMA X BADTTW WOVEN PANT",
            descricao: "R$ 470,00"
        },

        {
            imagem: camisa03,
            titulo: "Camiseta Streetwear Prison Grime time",
            descricao: "R$ 119,90"
        },

        {
            imagem: jaqueta01,
            titulo: "Jaqueta Corta Vento Colegial Varsity",
            descricao: "R$ 197,00"
        },

    ]
    return (
        <div className='section-roupas'>
            <div className='card-roupas'>
                {dataCardRoupas.map((dados, index) => (
                    <CardRoupas key={index} dados={dados} />
                ))}
            </div>
        </div>
    )
}

export default Roupas
