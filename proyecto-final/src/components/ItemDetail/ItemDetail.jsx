import { useCartContext } from "../../context/CartContext/useCartContext"
import { Item } from "../Item/Item"


export const ItemDetail = ({ detail }) => {

    const { addToCart } = useCartContext();

    const handleAdd = (quantity) => {
        addToCart({...detail, quantity});
    }
    return (
        <Item {...detail} >
            <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />
        </Item>
    )
}