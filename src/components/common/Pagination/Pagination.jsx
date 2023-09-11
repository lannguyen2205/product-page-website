import React, { useState } from "react";
import "./Pagination.scss";

function Pagination() {
  const [clicked, setClicked] = useState(false);

  const handleCircleClick = () => {
    setClicked(true);
  };

  return (
    <div className="pagination">
      <div className="pagination__container">
        <div
          className={`pagination__item ${clicked ? "clicked" : ""}`}
          onClick={handleCircleClick}
        >
          <p>01</p>
        </div>
        <div className="pagination__item">01</div>
        <div className="pagination__item">01</div>
      </div>
    </div>
  );
}

export default Pagination;
