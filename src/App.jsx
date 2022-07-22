import React from "react";

const App = () => {
  const aa = () => {
    alert("Hello World");
  };
  return <button onClick={() => aa()}>App</button>;
};

export default App;
