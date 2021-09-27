import React  from "react";
// import Subject from "./component/Subject";
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
  // stata 값이 바뀔때 render 함수가 재호출 된다
  // props 나 stata 가 바뀔시 화면이 재 렌더링 된다

render(){
  console.log("app lender")
  let _title,_desc=null;
  if(this.state.mode === "welcome"){
    _title=this.state.welcome.title;
    _desc=this.state.welcome.desc;
  }else if(this.state.mode === "read"){
    _title=this.state.contents[0].title;
    _desc=this.state.contents[0].desc;
  }
  return (
    <div className="App"> 
      {/* <Subject 
      title={this.state.subject.title}
      sub={this.state.subject.sub}
       /> */}
        <header>
                <a href="/" onClick={function(e){
                  // 사용자 정의함수 링크를 클릭했을때 실행 되도록 약속 되어 있다.
                  console.log(e)
                  // 이벤트의 기본동작 제어
                  e.preventDefault()
                  // debugger; => 여기서 정지 후 소스코드에서 코드 확인
                }}>
                <h2>{this.state.subject.title}</h2>
                     </a>
                {this.props.desc}
            </header>
      <Title   data={this.state.contents}/>
      <TOC title={_title} desc={_desc}/>
    </div>
  );
}
}

export default App;
