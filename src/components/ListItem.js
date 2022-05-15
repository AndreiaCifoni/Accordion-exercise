import React, { useState } from "react";

const ListItem = ({ item }) => {
  const [toggle, setToggle] = useState(false);

  const onClickHandle = () => {
    setToggle(!toggle);
  };

  return (
    <div onClick={onClickHandle}>
      <p>{item.title}</p>
      {toggle ? <p>{item.description}</p> : null}
    </div>
  );
};

export default ListItem;
