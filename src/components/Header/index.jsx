import {Head,  Title, Logo} from './styles'
import logo from '../../images/logo.svg'
export const Header = () => {

    return(
        <Head>
            <div>
               <Logo src={logo} alt="" />
            </div>
            
            <Title>Viva exeriências gastronômicas no conforto da sua casa </Title>
        </Head>
    )
}