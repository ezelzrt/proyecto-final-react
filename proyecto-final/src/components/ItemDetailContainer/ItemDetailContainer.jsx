import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useCartContext } from "../../context/CartContext/useCartContext"
import { getProductById } from "../../services/products";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then((item) => setDetail(item))
            .catch((error) => console.error('Error fetching product detail:', error));
    }, [id]);

    const { addToCart } = useCartContext();
    
    return (
        <main className="item-detail-page">
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