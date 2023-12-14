import React from "react";

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.img} alt={props.title} className="product-card-img" />
      <h2 className="">{props.title}</h2>
      <h3 className="">from {props.price}$</h3>
    </div>
  );
}

export default ProductCard;
