import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const Catagory = () => {
  return (
    <div>
      <List className="flex gap-x-4 md:gap-x-10">
        <ListItem
          className="text-black text-sm md:text-base font-sans font-semibold capitalize"
          itemName="all products"
        />
        <ListItem
          className="text-black/50 text-sm md:text-base font-sans font-semibold capitalize hover:text-pink duration-300 hover:cursor-pointer"
          itemName="t-shirt"
        />
        <ListItem
          className="text-black/50 text-sm md:text-base font-sans font-semibold capitalize hover:text-pink duration-300 hover:cursor-pointer"
          itemName="hoodies"
        />
        <ListItem
          className="text-black/50 text-sm md:text-base font-sans font-semibold capitalize hover:text-pink duration-300 hover:cursor-pointer"
          itemName="jacket"
        />
      </List>
    </div>
  );
};

export default Catagory;
