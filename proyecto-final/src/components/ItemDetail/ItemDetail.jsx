import { Item } from "../Item/Item"


export const ItemDetail = ({ detail, children }) => {

    return (
        <Item {...detail} >
            {children}
        </Item>
    )
}