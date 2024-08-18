import React, { useContext, useEffect, useState } from "react";
import Container from "../commen/Container";
import Row from "../commen/Row";
import Button from "../commen/Button";
import Layout from "../commen/Layout";
import QtyContainer from "../commen/QtyContainer";
import client from "../../apis";
import apiEndpoints from "../../apis/endpoint";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { CartContext } from "../../contextAPIs";

function ProductDetail() {
  const { handleInc } = useContext(CartContext);
  const [product, setProduct] = useState();
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const response = await client.get(apiEndpoints.product(id));
      setProduct(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Layout>
      <Container className="my-[41px]">
        <Row className="justify-between">
          <Row className="w-[47%] flex-col">
            <img
              className="w-full object-cover h-[80vh]"
              src={product?.img}
              alt={product?.title}
            />
          </Row>
          <Row className="w-[47%] flex-col">
            <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px]">
              {`${product?.category?.title}| ${product?.title}`}
            </h1>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[17%] mb-[10px]">
                Rating:
              </p>
              <p className="text-[18px] text-black">{product?.rating}</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Price:
              </p>
              <p className="text-[18px] text-black">{product?.price}</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Category:
              </p>
              <p className="text-[18px] text-black">
                {product?.category?.title}
              </p>
            </Row>
            <Row className="gap-[20px] mt-[30px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Description:
              </p>
              <p className="text-[18px] text-black">{product?.description}</p>
            </Row>
            <div className="mt-[40px]">
              <QtyContainer data={product} />
            </div>
            <Row>
              <Button
                onClick={() => handleInc(product)}
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
