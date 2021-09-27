import React, { Component } from "react";


class Title extends Component{
    render(){
        console.log("title lender")
        const lists=[];
        const data=this.props.data
        let i =0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a href={"/content/" + data[i].id}>{data[i].title}
                </a>
                </li>)
            i= i +1; 
        }
        return(
            <nav>
               {lists}
            </nav>
        )
    }
}

// 이 코드로 인해서 다른 컴포넌트에서 타이틀 클래스 사용가능 
export default Title;