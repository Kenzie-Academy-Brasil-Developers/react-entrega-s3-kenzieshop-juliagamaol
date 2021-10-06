import './index.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addToCartThunk} from '../../store/modules/cart/thunks';
import { Card, CardContent, Typography } from '@material-ui/core';
export default function Product(props) {
    const[ids, setIds] = useState(1)
    const dispatch = useDispatch()
    const{product:{name,price,image}} = props
    

    const handleClick = () =>{
        
        const obj = {
            id:ids,
            name:name,
            price:price,
            image:image
        }
        
        dispatch(addToCartThunk(obj))
        setIds(ids+1)
    }


    return (
        <Card>
            <CardContent>
                <img src={image} alt=""/>
                <Typography  variant="span" component="div" sx={{textAlign:'left'}}>
                    {name}
                </Typography>
                <Typography  variant="span" color="text.secondary">
                    {price.toLocaleString('pt-Br', {style:'currency', currency:'BRL'})}
                </Typography>
                <button variant="outlined" onClick={handleClick} className="btn">Adicionar no carrinho</button>
            </CardContent>
            
        </Card>
    )
}
