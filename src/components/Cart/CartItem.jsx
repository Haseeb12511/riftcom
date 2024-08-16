import React from "react";
import Row from "../commen/Row";
import QtyContainer from "../commen/QtyContainer";

function CartItem() {
  return (
    <Row className="border-[1px] border-gray-400 rounded-br rounded-bl items-center w-full py-[10px] px-[20px] mb-[30px]">
      <Row className="w-[20%]">
        <img
          className="w-2/3 h-[150px] object-cover rounded-[6px]"
          src="https://files.cdn.printful.com/o/upload/bfl-image/28/10325_l_statement%20eco.jpg"
          alt="cart product"
        />
      </Row>
      <p className="w-[20%] text-[16px] text-black font-medium">Demo product</p>
      <p className="w-[20%] text-[16px] text-black font-medium">$20</p>
      <Row className="w-[20%] justify-center">
        <QtyContainer />
      </Row>
      <p className="w-[20%] text-[16px] text-center text-black font-medium">
        $140
      </p>
    </Row>
  );
}

export default CartItem;
