import React from "react";
import SectionHeading from "./SectionHeading";
import { LiaAngleRightSolid } from "react-icons/lia";

const PageTitle = ({ title, root, path }) => {
  return (
    <div className="flex flex-col gap-y-8">
      <SectionHeading title={title} />
      <p className="text-primary/50 font-sans text-xs capitalize">
        {root} <LiaAngleRightSolid className="inline-block" />
        {path}
      </p>
    </div>
  );
};

export default PageTitle;
