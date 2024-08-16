import React from "react";
import Row from "../commen/Row";

const menus = [
  "Jewelry & Accessories",
  "Clothing & Shoes",
  "Home & Living",
  "Wedding & Party",
  "Toys & Entertainment",
  "Art & Collectibles",
  "Craft Supplies & Tools",
];

function BottomHeader() {
  return (
    <div className="w-full h-[60px] bg-[#888f950e] px-[8%]">
      <Row className="h-full flex items-center justify-between">
        {menus.map((item) => (
          <p className="text-[16px] text-slate-800" key={item}>
            {item}
          </p>
        ))}
      </Row>
    </div>
  );
}

export default BottomHeader;
