import React, { Component } from 'react';
import Button, { Result } from './Button.js';

class App extends Component{
    constructor(props){
        super(props);
        this.state = { counter: 0 };
      }
      
    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue 
        }));
    }
    
      render() {
        return (
          <div>
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
          <Button incrementValue={10} onClickFunction={this.incrementCounter} />
          <Button incrementValue={100} onClickFunction={this.incrementCounter} />
          <Button incrementValue={500} onClickFunction={this.incrementCounter} />
          <Button incrementValue={1000} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter}/>
          </div>
      );
    }
  }

  export default App;