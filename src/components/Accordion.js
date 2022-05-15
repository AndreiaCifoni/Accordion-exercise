import React from "react";
import ListItem from "./ListItem";

const Accordion = ({ items }) => {
  return (
    <React.Fragment>
      {items.map((item) => {
        return <ListItem item={item} />;
      })}
    </React.Fragment>
  );
};

export default Accordion;
