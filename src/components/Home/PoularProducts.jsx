import React from "react";
import Container from "../commen/Container";
import Row from "../commen/Row";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function PoularProducts() {
  return (
    <Container>
      <Row className="justify-center my-[20px] uppercase">
        <h1 className="text-[30px] font-semibold text-[#1e2832]">
          Popular Products
        </h1>
      </Row>
      <Row className="gap-[24px]">
        <div className="relative h-[648px] w-[52px]">
          <p className="absolute text-[34px] w-[648px] h-full text-black -rotate-90 text-center -z-[1]">
            Explore new and popular styles
          </p>
        </div>
        <Link to="/product-detail">
          <img
            className="w-[648px] h-[648px] object-cover cursor-pointer"
            src="https://files.cdn.printful.com/o/upload/bfl-image/28/10325_l_statement%20eco.jpg"
            alt="top popular"
          />
        </Link>
        <Row className="w-1/2 flex-wrap gap-[24px]">
          {[...Array(4)].map((_, idx) => (
            <Link to="/product-detail" className=" w-[46%] h-[312px]" key={idx}>
              <img
                src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2V8ZW58MHx8MHx8fDA%3D"
                alt="product"
                className="w-[312px] h-full object-cover"
              />
            </Link>
          ))}
        </Row>
      </Row>
    </Container>
  );
}

export default PoularProducts;
