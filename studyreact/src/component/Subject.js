import React from "react";


class Subject extends React.Component{
    render(){
        console.log("subject lender")
        return(
            <header>
                <a href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>
                <h2>{this.props.title}</h2>
                     </a>
                {this.props.desc}
            </header>
            
        )
    }
}

export default Subject;

// {/* <header>
//                 <a href="/" onClick={function(e){

//                   // 사용자 정의함수 링크를 클릭했을때 실행 되도록 약속 되어 있다.
//                   console.log(e)

//                   // 이벤트의 기본동작 제어
//                   e.preventDefault();
 
//                   // this.state.mode="welcome";  
                  
//                   /* state 값이 바뀌면 항상 setState 으로 state 값을 바꿔주어야 한다 */
//                   this.setState({
//                     mode:"welcome"
//                   })
//                   // debugger; => 여기서 정지 후 소스코드에서 코드 확인
//                 // 이벤트를 설치시 this 를 찾을수 없어서 에러가 발생시 bind 사용
//                 // 함수가 끝난 직후에 bind(this) 추가
//                 //함수 안에서 this 는 우리의 컴포넌트가 된다
//                 }.bind(this)}>
//                 <h2>{this.state.subject.title}</h2>
//                      </a>
//                 {this.state.subject.sub}
//             </header> */}