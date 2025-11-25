import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useCartContext } from "../../context/CartContext/useCartContext"

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching product detail");
                }
                return response.json();
            })
            .then((data) => {
                const product = data.find((item) => item.id === Number(id));
                if (product) {
                    setDetail(product);
                } else {
                    throw new Error("Product not found");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const { addToCart } = useCartContext();
    
    return (
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} >
                    <button onClick={() => addToCart(detail)}>Añadir al carrito</button>
                </ItemDetail>
            ) : (
                <p>Cargando detalle del producto...</p>
            )}
        </main>
    )

}