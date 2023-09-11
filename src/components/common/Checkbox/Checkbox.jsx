import React, { useState } from "react";
import "./Checkbox.scss";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="custom-checkbox-mark"></span>
    </label>
  );
}

export default Checkbox;
