import React from 'react'
import "./style.css"
import tenis1 from "./assets/tenis1.png"
import tenis2 from "./assets/tenis2.png"
import tenis3 from "./assets/tenis3.png"
import tenis4 from "./assets/tenis4.png"
import tenis5 from "./assets/tenis5.png"
import tenis6 from "./assets/tenis6.png"
import CardRoupas from '../../components/cardRoupas'

 function Tenis() {
    const dataCardRoupas = [
        {
            imagem: tenis1,
            titulo: "Tênis Nike React Infinity Run Flyknit 3 Feminino",
            descricao: "R$ 1.099,90 ou 10x de R$ 52,00 sem juros"
        },

        {
            imagem: tenis2,
            titulo: "Tênis Nike Air Force 1 HO20 BG Dual Swoosh - White Wheat",
            descricao: "R$ 1.099,90 ou 10x de R$ 52,00 sem juros"
        },

        {
            imagem: tenis3,
            titulo: "Tênis Nike Air Force 1 HO20 BG Dual Swoosh - White Wheat",
            descricao: "R$ 1.099,90 ou 10x de R$ 52,00 sem juros"
        },

        {
            imagem: tenis4,
            titulo: "Tênis Nike React Infinity Run Flyknit 3 Feminino",
            descricao: "R$ 1.099,90 ou 10x de R$ 52,00 sem juros"
        },

        {
            imagem: tenis5,
            titulo: "Tênis Nike React Infinity Run Flyknit 3 Feminino",
            descricao: "R$ 1.099,90 ou 10x de R$ 52,00 sem juros"
        },

        {
            imagem: tenis6,
            titulo: "Tênis Nike React Infinity Run Flyknit 3 Feminino",
            descricao: "R$ 1.099,90 ou 10x de R$ 52,00 sem juros"
        }
    ]

    return (
        <div className='section-tenis'>
            <div className='card-tenis'>
                {dataCardRoupas.map((dados, index) => (
                    <CardRoupas key={index} dados={dados} />
                ))}
            </div>
        </div>
    )
}
export default Tenis;