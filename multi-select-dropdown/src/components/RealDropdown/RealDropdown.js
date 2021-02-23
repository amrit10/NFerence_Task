import React, {Component} from 'react';

import MultiSelectDropdown from './MultiSelectDropdown/MultiSelectDropdown';
import Pill from '../UI/Pill/Pill';

import classes from './RealDropdown.module.css';

class RealDropdown extends Component {
    
    state = {
        expanded: false,
        inputValue: ""
    };

    wrapperRef = React.createRef();
    
    inputClickHandler = () => {
        this.setState(prevState => {
            return {expanded: !prevState.expanded};
        });
    }

    handleClickOutside = (event) => {
        if(this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState(prevState => {
                if(prevState.expanded) return {expanded: !prevState.expanded};
            });
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    render(){
        return(
            <div className = {classes.RealDropdown}>
                <div ref = {this.wrapperRef}>
                    <input
                        type = "text"
                        value = "Select users"
                        readOnly
                        onClick = {this.inputClickHandler}
                    />
                    {this.state.expanded && (
                        <MultiSelectDropdown
                            data = {this.props.data}
                            onChanged = {updatedList => {
                                // this.setState({expanded: false});
                                this.props.onSelect(updatedList);
                            }}
                        />
                    )}
                </div>
                <div>
                    {this.props.data.map(({label, key, isSelected}) => {
                        if(isSelected){
                            return (
                                <Pill key = {key} label = {label}  />
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
export default RealDropdown;