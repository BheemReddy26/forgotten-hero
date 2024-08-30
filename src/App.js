import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

const App = () => {
  let initialState = false;
  const [hide, setHide] = useState(initialState);

  var onHideClick = () => {
    setHide(!hide);
  };
  var styles = hide ? "hide" : "visible";
  console.log(hide);
  return (
    <>
      <button onClick={onHideClick}>{hide ? "visibe" : "hide"} Story</button>
      <div className={styles}>
        <h1>Hello World</h1>
        <h1>This is Page was created to remember the forgotten Hero. </h1>
        <p>
          {" "}
          There lived a Hero named "Aaryan" in the 15th century. The story
          starts from the time of invasion
        </p>
        <p>
          okay I need to start believing (I am not particularly sure about the
          spelling believe) in one self.
        </p>
      </div>
    </>
  );
};

export default App;
