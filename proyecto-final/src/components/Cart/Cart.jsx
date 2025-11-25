import { useCartContext } from "../../context/CartContext/useCartContext";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./Cart.css";


export const Cart = () => {

    const {cart, getTotalItems, clearCart, removeFromCart} = useCartContext([]);

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div className="cart-items-container">
                    {cart.map((item) => (
                        <ItemDetail detail={item} key={item.id}>
                            <button className="remove-button" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </ItemDetail>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <div className="cart-summary">
                    <p>Total de artículos: {getTotalItems()}</p>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
            )}
        </div>
    )
}
