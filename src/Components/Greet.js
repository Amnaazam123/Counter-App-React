import React from "react"

function Greet(props){
    return(
        <h1>Hello {props.Name}! {props.Age}</h1>
    )
}
export default Greet