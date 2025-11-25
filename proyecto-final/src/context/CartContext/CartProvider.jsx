import { useState } from "react";
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const existsInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const addToCart = (item) => {
        if (existsInCart(item.id)) {
            alert("El producto ya está en el carrito");
            return;
        }
        setCart([...cart, item]);
        alert(`${item.name} ha sido agregado al carrito`);
    }

    const getTotalItems = () => {
        if (!cart.length) {
            return 0;
        }
        return cart.length;
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
        alert("Producto eliminado del carrito");
    }

    const clearCart = () => {
        setCart([]);
        alert("El carrito ha sido vaciado");
    }

    const values = { cart, addToCart, clearCart, getTotalItems, removeFromCart };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}