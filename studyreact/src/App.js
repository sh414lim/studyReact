import React  from "react";
import Subject from "./component/Subject";
import Title from "./component/Title";
import TOC from "./component/TOC";

  
class App extends React.Component{
  //state 초기화 및 초기설정
 constructor(props){
   super(props)
  this.state={
    mode:"welcome",
    subject:{title:"web" , sub:"world wid web"},
    welcome:{title:"Welcome",desc:"welcome React!!"},
    contents:[
      {id:1, title :"html", desc:"html is hypertext .."},
      {id:2, title:"css" ,desc:"css is for design"},
      {id:3, title:"javascript",desc:"Javascript is fir interactiove"}
    ]
    }  

 }
  

render(){
  return (
    <div className="App"> 
      <Subject 
      title={this.state.subject.title}
      sub={this.state.subject.sub}
       />
      <Title   data={this.state.contents}/>
      <TOC title="HTML" sub="HTN IS HYPERTEXT Markup language"/>
    </div>
  );
}
}

export default App;
