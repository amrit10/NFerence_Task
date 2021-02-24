import React, {Component} from 'react';

import ExpandedDropdown from './ExpandedDropdown/ExpandedDropdown';
import Pill from './Pill/Pill';

import classes from './MultiSelectDropdown.module.css';

class MultiSelectDropdown extends Component {
    
    state = {
        expanded: false // If dropdown is open or not
    };

    wrapperRef = React.createRef(); // Ref crated to handle closing of dropdown on any click outside
    
    handleClickOutside = (event) => {
        if(this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState(prevState => {
                if(prevState.expanded) return {expanded: !prevState.expanded};
            });
        }
    }

    inputClickHandler = () => { // Expand/collapse dropdown on click of input field
        this.setState(prevState => {
            return {expanded: !prevState.expanded};
        });
    }

    // Initializing event listener on mounting and removing on unmounting - event listener to handle closing dropdown on click anywhere outside the dropdown
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    // To select/unselect from the dropdown or Pill
    selectionChangeHandler = (key) => {
        const changedItemIndex = this.props.data.findIndex(item => item.key === key);
        const updatedItem = {...this.props.data[changedItemIndex], isSelected: !this.props.data[changedItemIndex].isSelected};
        const newData = [...this.props.data];
        newData[changedItemIndex] = updatedItem;
        this.props.onSelect(newData, updatedItem);
    }

    render(){
        return(
            <div className = {classes.RealDropdown}>
                <div ref = {this.wrapperRef} >
                    <input
                        className = {classes.RealDropdownStatic}
                        type = "text"
                        value = "Select users"
                        readOnly
                        onClick = {this.inputClickHandler}
                    />
                    {this.state.expanded && ( // rendering dropdown only when expanded
                        <ExpandedDropdown
                            data = {this.props.data}
                            onChanged = {this.selectionChangeHandler}
                        />
                    )}
                </div>
                <div>
                    {this.props.data.map(({label, key, isSelected}) => {
                        if(isSelected){ // rendering Pills for only selected items
                            return (
                                <Pill 
                                    key = {key} // unique key
                                    keys = {key} // passing key as props
                                    label = {label}
                                    onChanged = {this.selectionChangeHandler}
                                />
                            )
                        }else{
                            return null;
                        }
                    })}
                </div>
            </div>
        )
    }
}
export default MultiSelectDropdown;