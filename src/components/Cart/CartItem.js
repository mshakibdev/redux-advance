import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "./../../store/cartSlice";

const CartItem = (props) => {
  console.log("props", props.item);
  const { title, quantity, totalPrice, price, id } = props.item;
  const dispatch = useDispatch();
  const increaseItemHandler = () => {
    const product = {
      id,
      title,
      quantity,
      price,
      totalPrice,
    };
    dispatch(cartActions.addItemToCart(product));
  };
  const decreaseItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemHandler}>-</button>
          <button onClick={increaseItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
