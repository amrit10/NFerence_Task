import React, {Component} from 'react';

import classes from "./Pill.module.css";

class Pill extends Component {
    
    render() {
        return(
            <div className = {classes.Pill}>
                <span>{this.props.label}</span>
            </div>
        );
    };
};

export default Pill;