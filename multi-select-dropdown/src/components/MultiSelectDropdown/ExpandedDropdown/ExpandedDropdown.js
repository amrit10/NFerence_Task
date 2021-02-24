import React, {Component} from 'react';

import classes from './ExpandedDropdown.module.css';

class ExpandedDropdown extends Component {
    render() {
        return(
            <div className = {classes.MultiSelectDropdown}>
                {this.props.data.map(({label, key, isSelected}) => {
                    return (
                        <div key = {key}  >
                            <button className = {classes.MultiSelectDropdownRow} onClick = {() => this.props.onChanged(key)}>
                                {label}
                                {isSelected && (
                                    <input 
                                        type = "checkbox"
                                        name = {key}
                                        checked = {isSelected}
                                        readOnly    
                                    />
                                )}
                            </button>
                        </div>
                    )
                })}
              
            </div>
        );
    };
};

export default ExpandedDropdown;