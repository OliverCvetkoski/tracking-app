import "./Tracking.css";
import PackageIcon from "../images/package.png";
import { formatDate } from "../helperFunctions/formatDate";

export function Tracking({ orderId, orders, date }) {
  const order = orders.find((order) => order.id === orderId);

  if (!order) {
    return <div>Order not found</div>;
  }

  const statuses = ["Country", "Shipped", "Customs", "City", "Delivered"];
  const currentIndex = statuses.indexOf(order.status);

  return (
    <div className="container">
      <div className="header">
        <img src={PackageIcon} alt="Package icon" />
        <p>Estimated delivery by</p>
        <span>{formatDate(date)}</span>
      </div>
      <div className="tracking-bar">
        <div className="tracking-bar-statuses">
          {statuses.map((status, index) => (
            <div
              key={status}
              className={`tracking-bar-status ${
                index <= currentIndex ? "active" : ""
              }`}
            >
              <div className="tracking-bar-circle">
                {index <= currentIndex && (
                  <div className="tracking-bar-filled-circle"></div>
                )}
              </div>
              <span
                className={`status ${index <= currentIndex ? "active" : ""}`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
        <div className="tracking-bar-line-container">
          <div
            className="tracking-bar-line"
            style={{
              width: `${(currentIndex / (statuses.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
