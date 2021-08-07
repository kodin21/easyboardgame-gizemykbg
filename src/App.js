import React from "react";
import "./App.css";
import SelectBox from "./components/selectBox";

import Player from "./components/player";

function App() {
  return (
    <div>
      <SelectBox />
      <div className="Area">
        <Player body="c1" />
      </div>
    </div>
  );
}

export default App;
