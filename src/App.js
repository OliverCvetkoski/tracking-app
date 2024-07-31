import { useSelector } from "react-redux";
import { Tracking } from "./components/tracking/Tracking";
import { LoadingSpinner } from "./components/loadingSpinner/LoadingSpinner";
import { OrderSearch } from "./components/orderSearch/OrderSearch";
import classes from "./App.module.css";

function App() {
  const orderProgressState = useSelector((state) => state.getOrderProgress);

  return (
    <div className={classes.container}>
      <OrderSearch />
      {orderProgressState.status === "loading" && (
        <div className={classes.loading}>
          <LoadingSpinner black={true} />
        </div>
      )}
      {orderProgressState.status === "success" && (
        <Tracking order={orderProgressState.order} />
      )}
      {orderProgressState.status === "error" && (
        <div className={classes.error}>
          <div>{orderProgressState.error}</div>
        </div>
      )}
    </div>
  );
}

export default App;
