import { Button } from "@material-ui/core"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CardOfProduct from "../Card"
import { Carts } from "./styles"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Cart() {
    const cart = useSelector(state => state.cart)

    return(
        <div>
            <h1>Meu carrinho de compras</h1>
            <Link to="/">
                    <Button variant="outlined" startIcon={<ArrowBackIcon />}>Home</Button>
                </Link>
            <Carts>
                {cart.map((product,index)=>(
                    <CardOfProduct key={index} product={product} id={index}/>
                ))}
            </Carts>
        </div>
    )
    
}
