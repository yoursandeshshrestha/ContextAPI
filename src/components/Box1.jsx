import React, { useContext } from "react";
import Box2 from "./Box2";
import { MyContext } from "../context";

function Box1() {
  const { name } = useContext(MyContext);
  return (
    <div className="box1">
      {name}
      <Box2 />
    </div>
  );
}

export default Box1;
