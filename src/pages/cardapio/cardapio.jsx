import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../../images/logo.svg'
import {Header, Capa} from './styles'

import { Footer } from '../../components/Footer'

export const Cardapio = () => {
        const {id} = useParams()
        const [rest, setRest] = useState([])
        useEffect(() => {
            fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then(res => setRest(res))
        },[])
        
        
       
    return(
        <>
        <Header>
            <h4>{rest.titulo}</h4>
             <img src={logo} alt="texto alternativo" />
             <h4> 0 Produtos no carrinho </h4> 
        </Header>
        <Capa>
            <div>
                <span>{rest.tipo}</span>
                <h3>{rest.titulo}</h3>
            </div>
           
        </Capa>
    


        


        {/* <ul>
             <li>
                    <img src={rest.cardapio[0].foto}alt="" />
                    <h5>{rest.cardapio[0].nome}</h5>
                    <p>{rest.cardapio[0].descricao}</p>
                    {/* <button onClick={() => setModal(true)}>Adicionar ao carrinho</button> 
            </li>
        </ul>
        */}
        
        <Footer />
        </>
    )
}