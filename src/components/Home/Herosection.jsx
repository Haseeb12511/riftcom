import React from "react";
import Row from "../commen/Row";
import Button from "../commen/Button";

function Herosection() {
  return (
    <div className="w-full px-[8%] py-[50px]">
      <Row className="w-full items-center justify-between">
        <div className="w-[46%]">
          <h1 className="text-[74px] text-slate-950 font-light">Collection</h1>
          <p className="text-[30px] text-black mt-[50px]">
            You can explore and show many products different collection from
            varlous brands her
          </p>
          <Button />
        </div>
        <div className="w-[46%]">
          <div className="w-[384px] h-[502px] relative">
            <img
              className="animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px]"
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              alt="Hero img"
            />
            <div className="animate-[wobble_10s_ease-in] absolute w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[#0000040] border-2 top-[20px] left-[18px] -z-[1]" />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Herosection;
