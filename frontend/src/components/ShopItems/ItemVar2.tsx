import React from "react";

type Props = {
  imgUrl: string;
  title: string;
  price: number;
  seller: string;
  amount: number;
  inStock: boolean;
};

const ItemVar2 = (props: Props) => {
  return (
    <div className="flex">
      {/* img part */}
      <img src={props.imgUrl} alt="product" className="w-1/3" />
      <div className="w-full">
        <p>{props.title}</p>
        <p>{props.seller}</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
};

export default ItemVar2;
