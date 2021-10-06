import { useSelector } from "react-redux"
import Product from "../Product"
import {Products} from '../ProductList/styles'
export default function ProductList() {
    const products = useSelector(state => state.products)

    return(
        <Products>
            {products.map((product, id)=>(
                <Product key={id} product={product} id={id}/> 
            ))}
        </Products>
    )
}
