import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCardButton = props => {
    const cartContext = useContext(CartContext)

    const numberOfCartItem = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
};

export default HeaderCardButton;