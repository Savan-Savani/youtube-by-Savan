import React, { useState } from "react";
import "./_categoriesBar.scss";

const keywords = [
  "all",
  "react",
  "angular",
  "all",
  "react",
  "angular",
  "all",
  "react",
  "angular",
  "all",
  "react",
  "angular",
  "All",
  "react",
  "angular", "all",
  "react",
  "angular",
  "all",
  "react",
  "angular",
  "all",
  "react",
  "angular",
  "all",
  "react",
  "angular",
  "All",
  "react",
  "angular", "all",
  "react",
  "angular",
  "all",
  "react",
  "angular",
  "all",
  "react",
  "angular",
  "all",
  "react",
  "angular",
  "All",
  "react",
  "angular",
];
const CategoriesBar = () => {
  const [activeElement, setActivateElement] = useState("All");

  const handleClick = (value) => {
    setActivateElement(value);
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, index) => (
        <span key={index} onClick={() => handleClick(value)} className={activeElement === value ? "active" : ''}>
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
