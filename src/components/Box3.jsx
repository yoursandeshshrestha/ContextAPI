import React, { useContext } from "react";
import { MyContext } from "../context";

function Box3() {
  const { name, setName } = useContext(MyContext);
  return <div className="box3">{name}</div>;
}

export default Box3;
