import './index.css'
import { useDispatch } from "react-redux"
import { removeFromCartThunk } from "../../store/modules/cart/thunks"
import {Card, CardContent, Typography } from "@material-ui/core"

export default function CardOfProduct({product:{id,name,price,image}}) {
    const dispatch = useDispatch()
    const handleRemove = (id) =>{
        dispatch(removeFromCartThunk(id))
    }
    return (
        <Card>
            <CardContent>
                <img src={image} alt={name}/>
                <Typography gutterBottom variant="span" component="div" sx={{textAlign:'left'}}>
                     {name}
                </Typography>
                <Typography  variant="span" color="text.secondary">
                    {price.toLocaleString('pt-Br', {style:'currency', currency:'BRL'})}
                </Typography>
                <div><button variant="outlined" onClick={()=>handleRemove(id)}>Remover do produto</button></div>
            </CardContent>
           
        </Card>
    )
}
