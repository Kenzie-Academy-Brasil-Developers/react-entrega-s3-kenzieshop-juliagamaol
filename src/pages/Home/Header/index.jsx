import './index.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
    const cart = useSelector(state => state.cart)
    const totCart = cart.reduce((a,b)=>a+b.price,0)
    
    return (
        <div>
            <h2>KenzieShop</h2>

            <nav>
                <Link to="/cart">
                    <button className="tot"><b>Subtotal: {totCart.toLocaleString('pt-Br', {style:'currency', currency:'BRL'})}</b></button>
                </Link>
            </nav>
        </div>
    )
}
