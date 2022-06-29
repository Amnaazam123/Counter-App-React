import React, {Component} from "react"
class Counter extends Component{
    constructor(){
        super()
        this.state={
            count : 0
        }
    }
    increseCount(){
        this.setState(
            (prevState)=>({count:prevState.count+1}),
            ()=>{console.log("I am here after state change." + this.state.count)})
            
    }
    incrementFive()
    {
        this.increseCount()
        this.increseCount()
        this.increseCount()
        this.increseCount()
        this.increseCount()
    }
    render()
    {
        return(
            <div>
                Count:{this.state.count}
                <button onClick={()=>this.incrementFive()}>INCREMENT FIVE</button>
            </div>
        )
    }
}
export default Counter
