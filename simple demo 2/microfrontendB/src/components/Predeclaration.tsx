import React from "react";
import Header from "./Header";

const Predeclaration = (props) => {
  
  return (
    <div
      className="mt-10 text-3xl mx-auto max-w-6xl border"
      style={{ color: "red" }}
    >
      <div className="bg-blue-700 text-white font-bold text-3xl p-5">
        <Header />
      </div>
    </div>
  );
};

export default Predeclaration;
