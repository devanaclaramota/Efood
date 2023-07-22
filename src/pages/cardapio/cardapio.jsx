import { useParams} from 'react-router-dom'
import logo from '../../images/logo.svg'
import {Header, Capa} from './styles'
import {Pratos} from '../../components/Pratos'

export const Cardapio = () => {
        const {id} = useParams()
   
    return(
        <>
        <Header>
            <h4>Nome do restaurante {id}</h4>
             <img src={logo} alt="texto alternativo" />
             <h4> 0 Produtos no carrinho </h4> 
        </Header>
        <Capa>
            <div>
                <span>nome</span>
                <h3>Nome</h3>
            </div>
           
        </Capa>
        <Pratos />
        </>
    )
}