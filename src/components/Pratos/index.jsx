import { useEffect, useState } from 'react'
import close from '../../images/close.svg'
import { Item, Lista, Modal, Close, Content, Image , Over} from "./styles"
export const Pratos = () => {

        const [modal, setModal] = useState(false);
        const [cardap, setCardap] = useState([{}])
        useEffect(() => {
                fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
                .then(res => res.json())
                .then(res => setCardap(res))
            },[])
        

     
        const desc = () => {
            if(cardap.cardapio[0].descricao.length > 120 ){
              return   cardap.cardapio[0].descricao.slice(0,117) + '...'
            }
            return cardap.cardapio[0].descricao
        }
    
       
         
        
        
    return(
    
        <Lista>
          
            
   
            <Item>
                    <img src={cardap.cardapio[0].foto}alt="" />
                    <h5>{cardap.cardapio[0].nome}</h5>
                    <p>{desc(cardap.cardapio[0].descricao)}</p>
                    <button onClick={() => setModal(true)}>Adicionar ao carrinho</button>
            </Item>
        
             <Over className={modal ? 'visible': ''}>
          <Modal >
               
                      <Close onClick={() => setModal(false)} src={close} alt="" />
                <Content>
                <Image src="https://viaplaceholder.com/" alt="imagem do prato" />  
                <div>
                        <h5>Pizza Marguerita</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, delectus. Quasi provident dignissimos similique repudiandae recusandae ut placeat, assumenda amet, architecto voluptatibus sequi tenetur consectetur eaque quidem dolore aliquam earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod veritatis ab iure enim repudiandae ipsa cumque optio facilis et. Voluptatem, earum est blanditiis sint dolorem exercitationem ratione deleniti in.</p>
                        <p>Serve: de 2 a 3 pessoas </p>
                        <button>Adicionar ao carrinho - 50.00</button>   
                </div>
                </Content>  
          </Modal>
            </Over> 
        </Lista>
       

       
    )
}