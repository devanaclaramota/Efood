import { useState, useEffect } from "react"
import { Styles } from "./styles"
export const Pratos = () => {

    const [pratos, setPratos] = useState([]);
    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
        .then(res => res.json())
        .then(res => setPratos(res))
    },[])

    
    return(
    
        
        <Styles>
            {pratos.map((item) =>   
            <li>
                <img src={item.cardapio.foto} alt="" />
                <h4>{item.cardapio.nome}nome do restaurante</h4>
                <p>{item.cardapio.descricao}</p>
                <button>Adicionar ao carrinho</button>
        </li>
            )}
      
        </Styles>

       
    )
}