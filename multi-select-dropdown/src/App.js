import React, {Component} from 'react';

import MultiSelectDropdown from './components/MultiSelectDropdown/MultiSelectDropdown';

class App extends Component {

  state = { // Dropdown values with initial selections
    data: [ 
      {key: "jenny_hess", label: "Jenny Hess", isSelected: true},
      {key: "elliot_fu", label: "Elliot Fu", isSelected: true},
      {key: "stevie_feliciano", label: "Stevie Feliciano", isSelected: false},
      {key: "christian", label: "Christian", isSelected: false}
    ]
  }

  callback = () => { // As per the ask, modify this callback function (called on any selection change)
    console.log("cb");
  }

  selectionChangeHandler = (updatedData, updatedItem) => { // Passed to children to change state based on selection by user
    this.setState({data: updatedData},this.callback);
  };

  render(){
    return (
        <MultiSelectDropdown 
          data = {this.state.data}
          onSelect = {this.selectionChangeHandler}
        />
    );  
  }
}

export default App;
