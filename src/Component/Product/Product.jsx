import React from "react";

const Product = ({ product, addToCart }) => {
  const {
    name,
    brand,
    description,
    imageUrl,
    price,
    quantity,
    category,
    inStock,
    addedAt,
  } = product;

  return (
    <div className="border-2 m-5 gap-5 rounded-[8px] p-5">
      <h1 className="text-[18px]">Name: {name}</h1>
      <h2 className="text-[14px]">Bramd Name: {brand}</h2>
      <p className="text-[12px]">Description: {description}</p>
      <img src={imageUrl} alt="" />
      <h2 className="text-[12px]">Price: {price}</h2>
      <h3 className="text-[12px]">Quality: {quantity}</h3>
      <p className="text-[12px]">Catecory: {category}</p>
      <p className="text-[12px]">In Stock: {inStock}</p>
      <p className="text-[12px]">Address: {addedAt}</p>
      <button onClick={() =>addToCart(product)}  className="bg-blue-800 text-white px-[18px] py-[8px] mt-[12px] rounded-[6px]">Add to Cart</button>
    </div>
  );
};

export default Product;
