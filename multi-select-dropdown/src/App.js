import React, {Component} from 'react';

import RealDropdown from './components/RealDropdown/RealDropdown';

import './App.css';

class App extends Component {

  state = {
    data: [
      {key: "jenny_hess", label: "Jenny Hess", isSelected: true},
      {key: "elliot_fu", label: "Elliot Fu", isSelected: true},
      {key: "stevie_feliciano", label: "Stevie Feliciano", isSelected: false},
      {key: "christian", label: "Christian", isSelected: false}
    ]
  }

  callback = () => {
    console.log("cb");
  }

  render(){

    return (
      <div className="App">
        <RealDropdown 
          data = {this.state.data}
          onSelect = {(updatedList, updatedItem) => {
            this.setState({data: updatedList})
            this.callback();
          }}
        />

      </div>
    );  
  }
}

export default App;
