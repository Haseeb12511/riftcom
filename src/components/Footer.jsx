import React from "react";
import Container from "./commen/Container";
import Row from "./commen/Row";

function Footer() {
  return (
    <Container className="bg-black h-[52px] py-[35px]">
      <Row className="text-white justify-between h-full items-center">
        <p>© 2023 RiftCom Inc.</p>
        <img className="w-[283px]" src="/imgs/cards.png" alt="Cards" />
        <p>Scroll to Top</p>
      </Row>
    </Container>
  );
}

export default Footer;
