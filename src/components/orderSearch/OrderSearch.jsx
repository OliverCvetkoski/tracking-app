import { useDispatch } from "react-redux";
import { getOrderProgress } from "../../redux/getOrder";
import { useState } from "react";
import classes from "./OrderSearch.module.css";

export function OrderSearch() {
  const dispatch = useDispatch();

  const [orderId, setOrderId] = useState();

  function onSubmit() {
    dispatch(getOrderProgress({ package_id: orderId }));
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      onSubmit();
    }
  }

  return (
    <div className={classes.container}>
      <label htmlFor="order">Type order id to get order progress</label>
      <input
        type="text"
        id="order"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
}
