import React from "react";
import parse from "./equation-grammer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ASTContainer from "./ASTContainer";
import TopCard from "./TopCard";

const App = () => {
  const [equation, setEquation] = React.useState("");
  const [ast, setAST] = React.useState({});
  const handleResult = (e) => {
    try {
      const result = parse.parse(equation);
      setAST(result);
      toast.success("Equation parsed successfully");
    } catch (e) {
      toast(e.message);
      setAST({});
      toast.error("Equation parsing failed");
    }
  };
  return (
    <div className="flex flex-col pt-5 items-center ">
      <ToastContainer />
      <TopCard />
      <div className="w-full max-w-7xl pt-5  px-6 lg:px-8">
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="equation"
            id="equation"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="x + y - sin(40) + tan(z)/cos(90)"
            onChange={(e) => setEquation(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-indigo-600 rounded-l-none py-0 pl-2 pr-7 text-white focus:shadow-lg sm:text-sm"
              onClick={() => handleResult()}
            >
              Parse
            </button>
          </div>
        </div>
      </div>
      <ASTContainer ast={ast} />
    </div>
  );
};

export default App;
