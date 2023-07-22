import { CardStyle, Title, Descrip, Tags, Star, Item } from "./styles"
import {BsFillStarFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import { Tag } from "../Tag"
import { useEffect, useState } from "react"

export const Card = () => {

    const [restaurante, setRestaurante] = useState([]);
    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(res => setRestaurante(res))
    },[])


    return(
      
             <CardStyle>
            {restaurante.map((item) => (
                <Item>
                    <img src={item.capa} alt="" />
                    
                    <Tags>
                        {item.destacado && <Tag txt={'Destaque da semana'}/>}
                        
                        <Tag txt={item.tipo} />
                    </Tags>
                    
                    <div>  
                        <Title>{item.titulo}</Title>
                        <span>{item.avaliacao} <Star><BsFillStarFill /></Star> </span>
                    </div>
                    <Descrip>{item.descricao}</Descrip>
                    <article>
                     <Link to={'/cardapio/:id'}>
                        <Tag  txt={'Saiba mais'}/>
                     </Link>   
                    </article>
                </Item>
            ))}
           
           
            
            
        </CardStyle>

       
    )
}