import React from "react"

class TOC extends React.Component{
    render(){
        console.log("toc lender")
        return(
            <div>
                <h1>{this.props.title}</h1>
                {this.props.desc}
            </div>
        )
    }
}

export default TOC;