import styled from 'styled-components'
export const CardStyle = styled.div`
    border: 1px solid #E66767;
    width: 472px;
    color: #E66767;
    position: relative;
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