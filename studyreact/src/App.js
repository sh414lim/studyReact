import React  from "react";
// import Subject from "./component/Subject";
import Title from "./component/Title";
import TOC from "./component/TOC";
import Subject from "./component/Subject"
  
class App extends React.Component{
  //state 초기화 및 초기설정
 constructor(props){
   super(props)
  this.state={
    mode:"read",
    select_cotents_id:2,
    subject:{title:"web" , sub:"world wid web"},
    welcome:{title:"Welcome",desc:"welcome React!!"},
    contents:[
      {id:1, title :"html", desc:"html is hypertext .."},
      {id:2, title:"css" ,desc:"css is for design"},
      {id:3, title:"javascript",desc:"Javascript is fir interactiove"}
    ]
    }  

 }
  // stata 값이 바뀔때 render 함수가 재호출 된다
  // props 나 stata 가 바뀔시 화면이 재 렌더링 된다

render(){
  console.log("app lender")
  let _title,_desc=null;
  if(this.state.mode === "welcome"){
    _title=this.state.welcome.title;
    _desc=this.state.welcome.desc;
  }else if(this.state.mode === "read"){
    let i = 0;
    while(i<this.state.contents.length){
      let data = this.state.contents[i]
      if(data.id === this.state.select_cotents_id){
        _title=data.title;
        _desc=data.desc;
        break;
      }
      i= i+1;

    }
    _title=this.state.contents[0].title;
    _desc=this.state.contents[0].desc;
  }
  //this 는 컴포넌트 안에서 자기자신을 가리킨다
  console.log("render",this)
  return (
    <div className="App"> 
      <Subject 
      title={this.state.subject.title}
      sub={this.state.subject.sub}
      onChangePage={function(e){
      this.setState({
        mode:"welcome"
      })
      }.bind(this)}
       />
        
         
      <Title onChangePage={function(e){
        this.setState({
          mode:"read"
        })
      }.bind(this)} data={this.state.contents}/>
      <TOC title={_title} desc={_desc}/>
    </div>
  );
}
}

export default App;
