import React from "react";
import Comment from "./components/Comment";
import "./App.scss";

import data from "./data.json";

function App() {
  return (
    <div className="container">
      {data.comments.map((value, index) => {
        return <Comment {...value} key={value.id} />;
      })}
    </div>
  );
}

export default App;
