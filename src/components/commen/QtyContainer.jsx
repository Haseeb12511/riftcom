import React, { useContext } from "react";
import Row from "./Row";
import Button from "./Button";
import { CartContext } from "../../contextAPIs";

function QtyContainer({ data }) {
  const { cartItems, handleDec, handleInc } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item._id === data?._id);

  return (
    <Row className="items-center">
      <Button
        title="-"
        className="w-[40px] h-[40px]"
        onClick={() => handleDec(data)}
      />
      <p className="w-[70px] text-center text-[16px] font-semibold">
        {cartItem?.qty || 0}
      </p>
      <Button
        title="+"
        className="w-[40px] h-[40px]"
        onClick={() => handleInc(data)}
      />
    </Row>
  );
}

export default QtyContainer;
