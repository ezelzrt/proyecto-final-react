import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/products';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        getProducts(category)
            .then((items) => setProducts(items))
            .catch((error) => {
                console.error('Error fetching products:', error);
                setProducts([]);
            });
    }, [category]);

    return (
        <section>
            {!category && <h1>¡Bienvenido!</h1>}
            {category && <h2>Explorando {category}</h2>}
            <ItemList list={products} />
        </section>
    )
}
