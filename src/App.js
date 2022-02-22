import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/uiSlice";
import Notification from "./components/UI/Notification";

let isInitial = true;
function App() {
  const showCart = useSelector((state) => state.ui.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          title: "Sending",
          status: "pending",
          message: "sending data ...",
        })
      );
      const response = await fetch(
        "https://redux-0101-default-rtdb.firebaseio.com/cart.json",
        {
          //"PUT" => always override the existing data
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
        //  dispatch(
        //    uiActions.showNotification({
        //      title: "Error!",
        //      status: "error",
        //      message: "sending data failed!",
        //    })
        //  );
      }
      dispatch(
        uiActions.showNotification({
          title: "Success!",
          status: "success",
          message: "data successfully sent",
        })
      );
      // const responseData = await response.json();
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          title: "Error!",
          status: "error",
          message: "sending data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
