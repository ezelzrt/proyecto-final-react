import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { CATEGORIES } from "../../utils/config";

export const Nav = () => {

    const { getTotalItems } = useCartContext();

    const renderCategories = (categories) => {
        return categories.map((category) => {
            const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
            return (
                <li key={category}>
                    <NavLink to={`/category/${category}`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        {displayCategory}
                    </NavLink>
                </li>
            );
        });
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Inicio</NavLink>
                </li>
                {CATEGORIES.length > 0 && renderCategories(CATEGORIES)}
                <li className="cart-item">
                    <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link active cart-link' : 'nav-link cart-link'}>
                        <span className="cart-label">Carrito</span>
                        {getTotalItems() > 0 && (
                            <span className="cart-badge in-cart">{getTotalItems()}</span>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}