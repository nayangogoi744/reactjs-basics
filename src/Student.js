import React, { Component } from 'react';
import Marks from "./Marks";
class Student extends Component {
  constructor(){
      super();
      this.state = {
          roll : 123
      }
  }
clickHandle = () =>{
    console.log("Button clicked");
    this.setState({roll:this.state.roll+2});
};
    render() { 
        return ( 
            <div>
                <Marks roll = {this.state.roll}/>
                <button onClick={this.clickHandle}>Click</button>

            </div>
         );
    }
}
 
export default Student;