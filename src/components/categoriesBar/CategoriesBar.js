import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideosCategory } from "../../redux/actions/videos.action";
import "./_categoriesBar.scss";

const keywords = ["All", "React", "Angular"];
const CategoriesBar = () => {
  const [activeElement, setActivateElement] = useState('All');
  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActivateElement(value);
    dispatch(getVideosCategory(value));
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
