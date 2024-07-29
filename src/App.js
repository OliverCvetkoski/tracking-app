import React, { useState } from "react";
import "./App.css";
import { Tracking } from "./tracking/Tracking";
import { orders } from "./orders";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < orders.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <Tracking
        orders={orders}
        orderId={orders[currentIndex].id}
        date={orders[currentIndex].datetime}
      />
      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === orders.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
