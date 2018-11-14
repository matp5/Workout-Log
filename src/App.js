import React, { Component } from 'react';
import MainButtons from './MainButtons.js';
import Training from './Training.js';
import TrainingData from './TrainingData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onToggle: false
    };
    this.handleClick = this.handleClick.bind(this);
    
  }

  render() {
    return (
      <div className="App">
      <main>
        <MainButtons />
        <Training />
        <TrainingData />
      </main>
      </div>
    );
  }

handleClick = () =>{
  this.setState ({
    onToggle: !this.state.onToggle,
  });
}

}

export default App;
