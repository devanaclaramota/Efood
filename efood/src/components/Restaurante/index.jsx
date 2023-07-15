import { CardStyle, Title, Descrip, Tags, Star } from "./styles"
import {BsFillStarFill} from 'react-icons/bs'

import { Tag } from "../Tag"
export const Card = () => {

    return(
        <CardStyle>
           
            <img src="https://placeholder.com/472x217" alt="" />
             
             <Tags>
                 <Tag txt={'Destaque da semana'}/>
                <Tag txt={'Japonesa'} />
             </Tags>
               
            <div>  
                <Title>Nome do restaurante</Title>
                <span>4.9 <Star><BsFillStarFill /></Star> </span>
            </div>
            <Descrip>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam rerum id, voluptatibus omnis ullam corporis repellat officiis aspernatur, quidem ea unde ad blanditiis nisi saepe fugiat dolor eligendi repudiandae at.</Descrip>
            <article>
                <Tag  txt={'Saiba mais'}/>
            </article>
            
        </CardStyle>
    )
}