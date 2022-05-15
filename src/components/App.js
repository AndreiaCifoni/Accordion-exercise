import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: "My first Accordion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec fringilla arcu. Vivamus mollis neque vitae placerat auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    title: "My second Accordion",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Another Accordion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec fringilla arcu. ",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
