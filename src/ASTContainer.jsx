import React from "react";
import ReactJson from "react-json-view";

const ASTContainer = ({ ast }) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-5 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
        <div className="w-full p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Abstract Syntax Tree (AST)
          </h3>
          <div className="py-5">
            <ReactJson src={ast} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASTContainer;
