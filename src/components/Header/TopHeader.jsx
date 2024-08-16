import React from "react";
import Row from "../commen/Row";
import SearchIcon from "../../svgs/SearchIcon";
import RotatedSquare from "../../svgs/RotatedSquare";
import HeaderButton from "./HeaderButton";
import UserIcon from "../../svgs/UserIcon";
import BucketIcon from "../../svgs/BucketIcon";

function TopHeader() {
  return (
    <div className="w-full h-full px-[8%]">
      <Row className="h-full flex items-center justify-between">
        <SearchIcon />
        <Row className="items-center">
          <RotatedSquare />
          <h1 className="text-[28px] text-black mx-[10px]">RiftCom</h1>
          <RotatedSquare />
        </Row>
        <Row>
          <HeaderButton title="Account" Icon={UserIcon} />
          <HeaderButton title="Cart" Icon={BucketIcon} url="/cart" />
        </Row>
      </Row>
    </div>
  );
}

export default TopHeader;
