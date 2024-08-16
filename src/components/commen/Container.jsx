import React from "react";

const Container = ({ children, className }) => {
  return <div className={`w-full px-[8%] ${className}`}>{children}</div>;
};

export default Container;
