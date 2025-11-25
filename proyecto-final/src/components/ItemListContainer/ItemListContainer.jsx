import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching products");
                }
                return response.json();
            })
            .then((data) => {
                let products = data;
                if (category) {
                    products = data.filter(
                        (product) => product.category === category
                    );
                }
                setProducts(products);
            })
            .catch((error) => console.error(error));
    }, [category]);

    return (
        <section>
            {!category && <h1>¡Bienvenido!</h1>}
            {category && <h2>Explorando {category}</h2>}
            <ItemList list={products} />
        </section>
    )
}
