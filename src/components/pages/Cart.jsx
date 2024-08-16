import React from "react";
import Layout from "../commen/Layout";
import Container from "../commen/Container";
import Row from "../commen/Row";
import CartItem from "../Cart/CartItem";

function Cart() {
  return (
    <Layout>
      <Container className="mt-[40px]">
        <Row className="mb-[30px] justify-center">
          <h6 className="text-[24px] text-slate-700 font-semibold">
            Cart Details
          </h6>
        </Row>
        <Row className="flex-col mb-[30px]">
          <Row className="h-[40px] bg-gray-400 w-full px-[20px] items-center">
            <h6 className="w-[20%] text-[18px] text-white font-medium ml-[30px]">
              Image
            </h6>
            <h6 className="w-[20%] text-[18px] text-white font-medium ">
              Title
            </h6>
            <h6 className="w-[20%] text-[18px] text-white font-medium -ml-[30px]">
              Price
            </h6>
            <h6 className="w-[20%] text-[18px] text-white font-medium text-center">
              Qty
            </h6>
            <h6 className="w-[20%] text-[18px] text-white font-medium text-center">
              Total
            </h6>
          </Row>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Row>
      </Container>
    </Layout>
  );
}

export default Cart;
