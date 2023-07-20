 import { useState, useEffect } from "react";
 import {Header, Capa, Lista, Item} from './styles'
export const Cardapio = () => {

    const [pratos, setPratos] = useState([]);
    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
        .then(res => res.json())
        .then(res => setPratos(res))
    },[])

    const cardapio = pratos.cardapio;
    console.log(cardapio)
    return(
        <>
         <Header>
            <h4>{pratos.titulo}</h4>
             <h1>logo</h1>
             <h4> 0 Produtos no carrinho </h4>
        </Header>
            <div>
                <Capa src={pratos.capa} alt="" />
            </div>
            <Lista>
                
                    <Item>
                            <img src='https://viaplaceholder.com/'alt="" />
                            <h5>nome do restaurante</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid cum aspernatur, cupiditate saepe expedita.</p>
                            <button>Adicionar ao carrinho</button>
                    </Item>

                       <Item>
                            <img src='https://viaplaceholder.com/'alt="" />
                            <h5>nome do restaurante</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid cum aspernatur, cupiditate saepe expedita.</p>
                            <button>Adicionar ao carrinho</button>
                    </Item>
                    <Item>
                            <img src='https://viaplaceholder.com/'alt="" />
                            <h5>nome do restaurante</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid cum aspernatur, cupiditate saepe expedita.</p>
                            <button>Adicionar ao carrinho</button>
                    </Item>
                    <Item>
                            <img src='https://viaplaceholder.com/'alt="" />
                            <h5>nome do restaurante</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid cum aspernatur, cupiditate saepe expedita.</p>
                            <button>Adicionar ao carrinho</button>
                    </Item>
                    <Item>
                            <img src='https://viaplaceholder.com/'alt="" />
                            <h5>nome do restaurante</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid cum aspernatur, cupiditate saepe expedita.</p>
                            <button>Adicionar ao carrinho</button>
                    </Item>
                    
            
            </Lista>
           
        </>
    )
   



}