import React from 'react'
import "./style.css"
import CardRoupas from '../../components/cardRoupas'
import corrente01 from './assets/corrente01.png'
import corrente02 from './assets/corrente02.png'
import corrente03 from './assets/corrente03.png'
import brinco01 from './assets/brinco01.png'
import touca01 from './assets/touca01.png'
import bone01 from './assets/bone01.png'

function Acessorios() {
    const dataCardRoupas = [
        {
            imagem: corrente01,
            titulo: "Colar Monogram Eclipse",
            descricao: "R$ 3.450,00"
        },

        {
            imagem: corrente02,
            titulo: "Corrente Prata",
            descricao: "R$ 1.000"
        },
        
        {
            imagem: touca01,
            titulo: "Touca South To South Gorro - Laranja",
            descricao: "R$ 89,90"
        },

        {
            imagem: bone01,
            titulo: "Boné Anth.co Five Panel",
            descricao: "R$ 470,00"
        },

        {
            imagem: brinco01,
            titulo: "Brinco Cravejado Dourado",
            descricao: "R$ 1.000,00"
        },

        {
            imagem: corrente03,
            titulo: "Corrente com Pingente LV Picks",
            descricao: "R$ 3.850,00"
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

export default Acessorios
