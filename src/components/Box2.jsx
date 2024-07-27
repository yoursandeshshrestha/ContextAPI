import React, { useContext } from "react";
import Box3 from "./Box3";
import { MyContext } from "../context";

function Box2() {
  const { name, setName } = useContext(MyContext);
  return (
    <div className="box2">
      {name}
      <Box3 />
    </div>
  );
}

export default Box2;
