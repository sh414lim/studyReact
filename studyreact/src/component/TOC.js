import React from "react"

class TOC extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </div>
        )
    }
}

export default TOC;