import classes from "./Tracking.module.css";
import PackageIcon from "../../images/package.png";
import { formatDate } from "../../helperFunctions/formatDate";

export function Tracking({ order }) {
  if (!order) {
    return <div>Order not found</div>;
  }

  const lastOrderProgress = order.progress.length - 1;

  const statuses = ["New", "Accepted", "Picked", "Delivered"];
  const currentIndex = statuses.indexOf(
    order.progress[lastOrderProgress].status_name
  );

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <img src={PackageIcon} alt="Package icon" />
          <p>Estimated delivery by</p>
          <span>{formatDate(order.progress[lastOrderProgress].timestamp)}</span>
        </div>
        <div className={classes.trackingBar}>
          <div className={classes.trackingBarStatuses}>
            {statuses.map((status, index) => (
              <div
                key={status}
                className={`${classes.trackingBarStatus} ${
                  index <= currentIndex ? classes.active : ""
                }`}
              >
                <div className={classes.trackingBarCircle}>
                  {index <= currentIndex && (
                    <div className={classes.trackingBarFilledCircle}></div>
                  )}
                </div>
                <span
                  className={`${classes.status} ${
                    index <= currentIndex ? classes.active : ""
                  }`}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
          <div className={classes.trackingBarLineContainer}>
            <div
              className={classes.trackingBarLine}
              style={{
                width: `${(currentIndex / (statuses.length - 1)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className={classes.orderInfo}>
        <h2>Order tracking information</h2>
        {order.progress.map((o) => (
          <div className={classes.order}>
            <div className={classes.status}>{o.status_name}</div>
            <div className={classes.date}>{o.timestamp}</div>
          </div>
        ))}{" "}
      </div>
    </>
  );
}
