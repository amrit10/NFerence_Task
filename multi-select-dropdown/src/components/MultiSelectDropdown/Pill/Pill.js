import React, {Component} from 'react';

import classes from "./Pill.module.css";

class Pill extends Component {
    render() {
        return(
            <div className = {classes.Pill}>
                <span>{this.props.label}</span>
                <button onClick = {() => this.props.onChanged(this.props.keys)}>X</button>
            </div>
        );
    };
};

export default Pill;