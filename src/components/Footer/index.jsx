import {Foot, Logo, Redes, Infs} from './styles'
import { BsFacebook, BsInstagram , BsTwitter} from 'react-icons/bs';
import logo from '../../images/logo.svg'
export const Footer = () => {

    return(
        <Foot>
            <Logo src={logo} />
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