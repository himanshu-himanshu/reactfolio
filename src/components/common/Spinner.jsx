import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { GiConfirmed } from "react-icons/gi";

const Spinner = ({ confirm }) => {
  return (
    <div
      className={`border-2 border ${
        confirm ? "border-green-500" : "border-sky-500"
      } px-6 py-3 flex justify-center items-center w-full`}
    >
      {!confirm && (
        <ImSpinner9 className=" animate-spin text-3xl text-sky-500 " />
      )}
      {confirm && <GiConfirmed className="text-3xl text-green-500 " />}
    </div>
  );
};

export default Spinner;
