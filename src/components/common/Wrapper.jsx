import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full h-full lg:h-screen bg-secondary">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row justify-center h-full w-full items-start lg:items-center space-y-12 lg:space-y-0 pb-12 md:pb-0">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
