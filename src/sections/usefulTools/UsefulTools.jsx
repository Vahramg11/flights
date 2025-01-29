import React from "react";
import { useSelector } from "react-redux";
import ToolDetails from "../../components/toolDetails/ToolDetails";
import ToolItems from "../../components/toolDetails/ToolItems";
const UsefulTools = () => {
  const tools = useSelector((state) => state.tools);
  console.log(tools);

  return (
    <>
      <div className="flex gap-30 max-w-6xl w-full mt-20 flex-wrap justify-center">
        <div className="flex flex-col">
          <p className="font-bold mb-4 ms-1">
            Useful tools to help you find the best deals
          </p>
          {tools.tools.map((elm) => {
            return <ToolItems tool={elm} key={elm.id} />;
          })}
        </div>
        <ToolDetails tool={tools.selectedTool} />
      </div>
    </>
  );
};

export default UsefulTools;
