import React from "react";

const ItemList = React.memo(({ items }) => {
  console.log("ItemList rendered");
  return (
    <div>
      {items &&
        items.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
    </div>
  );
});

export default ItemList;
