import styled from 'styled-components'

export const Header = styled.header`
    height: 186px;
    color: #E66767;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #e3c3c3;

`

export const Capa = styled.img`
    height: 280px;
    width:100%;
    margin-bottom: 40px;

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
        height: 340px;
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
        }
        button{
            
            background-color: white;
            color: #e66767;
            border: none;
            padding: 4px;
            text-align: center;
            width:304px;
            margin: 8px;
            cursor: pointer;
        }
`
