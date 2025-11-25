import { useState } from "react";
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const existsInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const addToCart = (item) => {
        if (existsInCart(item.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return {...prod, quantity: prod.quantity + item.quantity};
                }
                return prod;
            });
            setCart(updatedCart);
            alert(`Se agregaron ${item.quantity} ${item.name} al carrito`);
            return;
        }
        setCart([...cart, item]);
        alert(`${item.name} ha sido agregado al carrito`);
    }

    const getTotalItems = () => {
        const totalItem = cart.reduce((acc, p) => acc + p.quantity, 0);
        return totalItem;
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
        alert("Producto eliminado del carrito");
    }

    const clearCart = () => {
        setCart([]);
        alert("El carrito ha sido vaciado");
    }

    const total = () => {
        const total = cart.reduce((acc, p) => acc + (p.price * p.quantity), 0);
        return Math.round(total * 100) / 100;
    }

    const checkout = () => {
        const ok = confirm("¿Desea finalizar la compra?");
        if(ok){
            alert("¡Gracias por su compra!");
            clearCart();
        }
    }

    const values = { cart, addToCart, clearCart, getTotalItems, removeFromCart, total, checkout };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}