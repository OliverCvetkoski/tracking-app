import "./App.css";
import { Tracking } from "./tracking/Tracking";
import { useDispatch, useSelector } from "react-redux";
import { nextOrder, previousOrder } from "./redux/orderSlice";

function App() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const currentIndex = useSelector((state) => state.order.currentIndex);

  return (
    <div>
      <Tracking
        orders={orders}
        orderId={orders[currentIndex].id}
        date={orders[currentIndex].datetime}
      />
      <div className="buttons">
        <button
          onClick={() => dispatch(previousOrder())}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={() => dispatch(nextOrder())}
          disabled={currentIndex === orders.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
