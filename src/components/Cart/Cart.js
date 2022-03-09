import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  //We can read data from the store with useSelector
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={{
              id: cartItem.id,
              title: cartItem.title,
              quantity: cartItem.quantity,
              totalPrice: cartItem.totalPrice,
              price: cartItem.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
