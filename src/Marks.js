import React, { Component } from 'react';
class Marks extends Component {
    constructor(props){
        super(props);
        this.state={
            mRoll : this.props.roll // state=123
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("From getDerived method");
        if(props.roll !== state.mRoll){
            //return {mRoll:props.roll}
            console.log({mRoll:props.roll});

        }
        return null;
    }
    componentDidMount(){
        console.log("Mounted");
    }
    render() { 
        console.log("From render");
        return ( 
            <div>
                {this.state.mRoll}
                <br/>
                {this.props.roll}
            </div>
         );
    }
}
 
export default Marks;