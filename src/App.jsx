import React, { useContext } from "react";
import Box1 from "./components/Box1";
import { MyContext } from "./context";

function App() {
  const { name, setName } = useContext(MyContext);

  const handlePress = () => {
    if (name === "Sandesh") {
      setName("Jasmine");
    } else {
      setName("Sandesh");
    }
  };

  return (
    <div className="main">
      <button onClick={handlePress}>PRESS</button>
      <Box1 />
    </div>
  );
}

export default App;
