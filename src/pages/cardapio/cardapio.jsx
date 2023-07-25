import { useParams , Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../../images/logo.svg'
import close from '../../images/close.svg'
import {Header, Capa, Lista, Item,  Modal, Close, Content, Image , Over} from "./styles"

import { Footer } from '../../components/Footer'

export const Cardapio = () => {
        const {id} = useParams()
        const [rest, setRest] = useState([])
        useEffect(() => {
            fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then(res => setRest(res))
        },[id])

        const [modal, setModal] = useState(false);
        
    return(
        <>
        <Header>
            <h4>{rest.titulo}</h4>
            <Link to={'/'}><img src={logo} alt="texto alternativo" /></Link> 
             <h4> 0 Produtos no carrinho </h4> 
        </Header>
        <Capa>
            <div>
                <span>{rest.tipo}</span>
                <h3>{rest.titulo}</h3>
            </div>
           
        </Capa>
       <Lista>
      {rest.cardapio?.map((prato) => (
        <>
        <Item key={prato.id}>
        <img src={prato.foto}alt="" />
        <h5>{prato.nome}</h5>
        <p>{prato.descricao}</p>
        <button onClick={() => setModal(true)}>Adicionar ao carrinho </button>
        </Item>
        
        </>
      ))}
      {rest.cardapio?.map((prato) => (
          <Over className={modal ? 'visible': ''}>
                    <Modal >
                        
                                <Close onClick={() => setModal(false)} src={close} alt="" />
                          <Content>
                          <Image src={prato.foto} alt="imagem do prato" />  
                          <div>
                                  <h5>{prato.nome}</h5>
                                  <p>{prato.descricao}</p>
                                  <p>Serve: {prato.porcao} </p>
                                  <button>Adicionar ao carrinho - {prato.preco}</button>   
                          </div>
                          </Content>  
                    </Modal>
                      </Over> 

                ))}
   
    </Lista>

  


        
        <Footer />
        </>
    )
}