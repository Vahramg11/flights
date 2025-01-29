import React from "react";

const ToolDetails = ({ tool }) => {
  const details = tool.details;
  console.log(details);

  return (
    <div className="flex flex-col w-[50%] justify-center gap-5">
      <h1 className="text-2xl">{details.dTitle}</h1>
      <p>{details.dText}</p>
      <img src={details.image} alt="" className="w-100" />
    </div>
  );
};

export default ToolDetails;
