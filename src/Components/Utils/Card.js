import React from "react";

const Card = (props) => {
  return (
    <div className="shadow-md w-[300px]  shadow-slate-700 px-5 my-6 cardShadow transform delay-150 duration-300  ">
      {props.children}
    </div>
  );
};

export default Card;
