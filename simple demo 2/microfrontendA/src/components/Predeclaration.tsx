import React from "react";
import Counter from "./Counter";
import Header from "./Header";
import Users from "./Users";

const Predeclaration = (props) => {
  
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl border">
      <div className="bg-blue-700 text-white font-bold text-3xl p-5">
        <Header />
      </div>
      {/* <Users /> */}
      <Counter />
    </div>
  );
};

export default Predeclaration;
