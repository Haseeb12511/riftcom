import React from "react";

function Button({
  className = "h-[50px] w-[25%] mt-[45px]",
  title = "Shop Now",
}) {
  return (
    <button className={`text-white bg-black text-[20px] font-sm ${className}`}>
      {title}
    </button>
  );
}

export default Button;
