import React, { Component } from 'react';

class Button extends Component{ 
	render(){
  	return(
    	<button onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
      	+ {this.props.incrementValue}
      </button>
    );
  };
};

const Result = (props) => {
        return(
            <div>
            {props.counter}
            </div>
    );
};

export {Result}
export default Button;


// ReactDOM.render(<App />, mountNode);