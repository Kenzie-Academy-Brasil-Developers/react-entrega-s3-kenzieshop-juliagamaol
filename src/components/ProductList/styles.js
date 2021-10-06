import styled from 'styled-components'

export const Products = styled.div`
    @media(min-width:769px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap:10px;
        column-gap: 10px;
        align-content: center;
    } 
    
`