import React from "react";

const SectionHeading = ({ title, className }) => {
  return (
    <div>
      <h3
        className={`text-black font-robo text-xl sm:text-[50px] font-medium capitalize  ${className}`}
      >
        {title}
      </h3>
    </div>
  );
};

export default SectionHeading;
