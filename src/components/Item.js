import React, { useState } from "react";

function Item({ name, category }) {
  const [buttonColor, setButtonColor] = useState(true);
  const [lineThrough, setLinethrough] = useState(false);
 

  function handleClick(){
    setButtonColor(!buttonColor)
    setLinethrough(!lineThrough)
  }
   
  const lineThoughClass=lineThrough? "in-cart": ""
  const buttonClass = buttonColor ? "add" : "remove";

  return (
    <li className={lineThoughClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>
        {buttonColor ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
