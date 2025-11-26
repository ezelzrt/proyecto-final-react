import { useCartContext } from "../../context/CartContext/useCartContext";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./Cart.css";
import { Item } from "../Item/Item";

export const Cart = () => {
  const { cart, clearCart, removeFromCart, total, checkout } = useCartContext([]);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="cart-items-container">
          {cart.map((item) => (
            <Item key={item.id} {...item}>
                <span className="quantity-badge">Cantidad: {item.quantity}</span>
                <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                >
                    Eliminar
                </button>
            </Item>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-summary">
          <div className="total-pagar">
            <p>Total a pagar: ${total()}</p>
          </div>
          <button className="btn btn-primary" onClick={checkout}>
            Finalizar compra
          </button>
          <button className="btn btn-danger" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};
