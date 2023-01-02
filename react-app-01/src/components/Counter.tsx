import { Component } from 'react'
import { Count } from "../interfaces/ClassComponentInterfaces";

export default class Counter extends Component<Count> {
    componentDidUpdate(prevProps: Readonly<Count>, prevState: Readonly<{}>, snapshot?: any): void { // Used while update
        if(prevProps.count !== this.props.count){
            console.log("Class Component: Updated")
        }
    }
    
    render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
      </div>
    )
  }
}
