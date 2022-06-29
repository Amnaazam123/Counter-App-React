import React from "react"
import reactDOM from "react-dom"

export class Welcome extends React.Component{
    render() {
        return(
            <h1>Class component {this.props.Name}</h1>
        )
    }
}