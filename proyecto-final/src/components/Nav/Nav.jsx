import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {

    const { getTotalItems } = useCartContext();

    const CATEGORIES = ["notebooks", "coronas", "accesorios"];

    const renderCategories = (categories) => {
        
        return categories.map((category) => {
            const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
            return (
                <li key={category}>
                    <Link to={`/category/${category}`}>{displayCategory}</Link>
                </li>
            );
        });
    }

    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            {CATEGORIES.length > 0 && renderCategories(CATEGORIES)}
            <li>
                <Link to="/cart">Carrito</Link>
                {getTotalItems() > 0 && (
                    <span className="in-cart">{getTotalItems()}</span>
                )}
            </li>
        </ul>
    </nav>
}