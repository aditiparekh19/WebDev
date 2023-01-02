import React from 'react'
import Counter  from "./Counter";
import { Count } from "../interfaces/ClassComponentInterfaces";

export default class ClassComponent extends React.Component<{}, Count> {
  
  constructor(props: any){ // Runs before page load
    super(props); // This is required when you need to access some variables from the parent class.
    this.state = {
      count:0
    }
  }
  
  componentDidMount(): void { // Component renders first time / At the time of page load
    console.log("componentDidMount : When component render first time")
  }

  componentWillUnmount(): void { // Component Unmount
    console.log("componentWillUnmount: Component removed!")
  }
  
  render() { // JSX - JS XML (Write HTML code in JS) => transpiler converts it
    return (
      <>
      <h1>This is a functional component</h1>
      <Counter count={this.state.count}></Counter>
      <button onClick={()=>{this.setState({count : this.state.count + 1})}}>Click me!</button>
      </>
    )
  }
}
