import {Foot, Logo, Redes, Infs} from './styles'
import { BsFacebook, BsInstagram , BsTwitter} from 'react-icons/bs';
export const Footer = () => {

    return(
        <Foot>
            <Logo>logo</Logo>
            <Redes>
                <li> <BsFacebook /> </li>
                <li> <BsInstagram /> </li>
                <li> <BsTwitter /> </li>
            </Redes>
            <Infs>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
            </Infs>
        </Foot>
    )
}