import React from "react";
import Row from "./commen/Row";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProductCard() {
  return (
    <Link to="/product-detail" className="w-full shadow pb-[5px]">
      <img
        src="https://files.cdn.printful.com/o/upload/bfl-image/28/10325_l_statement%20eco.jpg"
        alt="best seller"
      />
      <Row className="px-[10px]">
        <h6 className="text-black text-[16px] font-semibold mt-[18px]">
          Demo Title
        </h6>
      </Row>
      <Row className="justify-between mt-[16] px-[10px] mb-[10px]">
        <p className="text-[16px] text-[#00000088]">Cloting</p>
        <p className="text-[16px] text-[#00000088] font-semibold">$20</p>
      </Row>
    </Link>
  );
}

export default ProductCard;
