import styled from 'styled-components'

export const CardStyle = styled.ul`
     display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    img{
        width: 100%;
        height: 217px;
    }
    div{
        display: flex;
        justify-content: space-between;
        padding: 8px;
    }
    article{
        display: inline-block;
        padding: 4px 8px ;
    }
    
`
export const Item = styled.li`
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;

    border: 1px solid #E66767;
    width: 472px;
    color: #E66767;
    position: relative;

`

export const Title = styled.h3`
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    

`

export const Descrip = styled.p`
    font-size: 14px;
    line-height: 22px;
   margin: 8px;
    
`
export const Tags = styled.div`
   display: flex;
   width: 100% ;
   justify-content:space-between;
    position: absolute;
    top:0px;
`
export const Star = styled.span`
    color: #FFB930;
    
`