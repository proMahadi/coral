import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ className, itemName, onClick , LinkTo , footerItem }) => {
  return (
    <li onClick={onClick} className={className}>
      {itemName}
      <Link to={LinkTo}>{footerItem}</Link>
    </li>
  );
};

export default ListItem;
