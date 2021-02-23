import React, {Component} from 'react';

import classes from './MultiSelectDropdown.module.css';

class MultiSelectDropdown extends Component {

    selectionHandler = (event) => {
        const key = event.target.name;
        const state = event.target.checked;
        const changedItemIndex = this.props.data.findIndex(item => item.key === key);
        const updatedItem = {...this.props.data[changedItemIndex], isSelected: state};
        const newData = [...this.props.data];
        newData[changedItemIndex] = updatedItem;
        this.props.onChanged(newData, updatedItem);
    }

    render() {
        return(
            <div className = {classes.MultiSelectDropdown}>
                {this.props.data.map(({label, key, isSelected}) => {
                    return (
                        <div className = {classes.MultiSelectDropdownRow} key = {key} >
                            <label htmlFor = {key} >{label}</label>
                            <input 
                                type = "checkbox"
                                name = {key}
                                checked = {isSelected}
                                onChange = {event => this.selectionHandler(event)}
                            />
                        </div>
                    )
                })}
              
            </div>
        );
    };
};

export default MultiSelectDropdown;