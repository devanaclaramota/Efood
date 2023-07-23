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

export const Lista = styled.ul`
    width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 32px;
    
`


export const Item = styled.li`
        background-color: #e66767;
        color: white;
        width: 320px;
        height: 420px;
        p, h5{
            margin: 8px;

        }
        p{
            height: 70px;
        }
        img{
            width: 304px;
            height: 167px;
            margin: 0 auto;
            margin: 8px;
            cursor: pointer;
        }
        button{
            
            background-color: white;
            color: #e66767;
            border: none;
            padding: 4px;
            text-align: center;
            width:304px;
            margin-top: 80px;
            margin-left: 8px;
            cursor: pointer;
        }
`
export const Modal = styled.div`
    background-color: #e66767;
    margin: auto;
    margin-top: 80px;
    width: 1024px;
    color:white;
    padding: 12px;
    
    
  
    h5{
        font-size: 18px;
        margin-bottom: 12px;
    }
    p{
        font-size: 14px;
        margin-top: 24px;
    }
    button{
        width: 218px;
        height: 24px;
        color: #e66767;
        background-color: #FFEBD9;
        border: none;
        margin-top: 42px;
        cursor: pointer;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;

    }
    `
    export const Over = styled.div`
       display: none;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #0000005c;
        &.visible{
        display: block;
    }
    `
      export const Content = styled.div`
      display: grid;
      grid-template-columns: 300px 1fr ;
  `
       export const Image = styled.img`
        width: 280px;
        height: 280px;
        border: 1px solid white ;
   `
    export const Close = styled.img`
        width: 16px;
        height: 16px;
        margin-left: 98%;
        top: 4px;
        cursor: pointer;
       

    `


