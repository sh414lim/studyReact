import React  from "react";
import Subject from "./Subject";
import Title from "./Title";
function TOC(){
  return(
    <div>
    <li><a href="1.html">web</a></li>
    <li><a href="2.html">react</a></li>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Title title="web" sub="what props?"/>
      <TOC/>
      <Subject title="web"/>
    </div>
  );
}

export default App;
