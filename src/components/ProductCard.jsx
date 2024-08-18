import React from "react";
import Row from "./commen/Row";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProductCard({ data }) {
  return (
    <Link to={`/product/${data._id}`} className="w-full shadow pb-[5px]">
      <img src={data.img} alt={data.title} />
      <Row className="px-[10px]">
        <h6 className="text-black text-[16px] font-semibold mt-[18px]">
          {data.title}
        </h6>
      </Row>
      <Row className="justify-between mt-[16] px-[10px] mb-[10px]">
        <p className="text-[16px] text-[#00000088]">{data.category.title}</p>
        <p className="text-[16px] text-[#00000088] font-semibold">
          {data.price}
        </p>
      </Row>
    </Link>
  );
}

export default ProductCard;
