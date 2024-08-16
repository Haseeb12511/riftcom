import React from "react";
import Container from "../commen/Container";
import Row from "../commen/Row";
import Button from "../commen/Button";
import Layout from "../commen/Layout";
import QtyContainer from "../commen/QtyContainer";

function ProductDetail() {
  return (
    <Layout>
      <Container className="my-[41px]">
        <Row className="justify-between">
          <Row className="w-[47%] flex-col">
            <img
              className="w-full object-cover h-[80vh]"
              src="https://files.cdn.printful.com/o/upload/bfl-image/28/10325_l_statement%20eco.jpg"
              alt="product"
            />
          </Row>
          <Row className="w-[47%] flex-col">
            <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px]">
              Clothing | Demo Product
            </h1>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[17%] mb-[10px]">
                Rating:
              </p>
              <p className="text-[18px] text-black">4/5</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Price:
              </p>
              <p className="text-[18px] text-black">$20</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Category:
              </p>
              <p className="text-[18px] text-black">Clothing</p>
            </Row>
            <Row className="gap-[20px] mt-[30px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Description:
              </p>
              <p className="text-[18px] text-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                fugit molestiae maxime impedit atque. Molestiae odio non velit
                ullam vitae architecto eaque quae tempora, facere doloribus
                libero natus in cupiditate. Esse eveniet dolorem, culpa minima
                fugit.
              </p>
            </Row>
            <div className="mt-[40px]">
              <QtyContainer />
            </div>
            <Row>
              <Button
                title="Add to Cart"
                className="w-[150px] h-[40px] mt-[20px]"
              />
            </Row>
          </Row>
        </Row>
      </Container>
    </Layout>
  );
}

export default ProductDetail;
