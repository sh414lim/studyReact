import React from "react";


class Subject extends React.Component{
    render(){
        console.log("subject lender")
        return(
            <header>
                <a href="/">
                <h2>{this.props.title}</h2>
                     </a>
                {this.props.desc}
            </header>
            
        )
    }
}

export default Subject;