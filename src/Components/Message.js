import React from "react"
import reactDOM from "react-dom"

class Message extends React.Component{
    constructor(){
        super()
        this.state = {
            message : "Visitor"
        }
        
    }
    changeMessage(){
        this.setState({message:"Subscriber"})
    }
    render() {
        return(
            <div>
                <h1>Hello {this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message