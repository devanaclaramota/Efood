import styled from 'styled-components'
import fundo from '../../images/fundo.svg'
import imagemdefundo from '../../images/imagemdefundo.svg'

export const Header = styled.header`
    width: 100%;
    height: 186px;
    color: #E66767;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(${fundo});
    background-size: cover;
    background-repeat: no-repeat;

`

export const Capa = styled.div`
    height: 280px;
    width:100%;
    margin-bottom: 40px;
    background-image: url(${imagemdefundo});
    background-size: cover;
    background-repeat: no-repeat;
    div{
        width: 1024px;
        margin: 0 auto;
        color: white;
        display:flex;
        flex-direction:column;
        padding: 16px 0px;
        gap: 180px;
    }
    span{
        font-weight: 100;
        font-size: 32px;

    }
    h3{
        font-size: 32px;
        font-weight: 900;
    }

`


