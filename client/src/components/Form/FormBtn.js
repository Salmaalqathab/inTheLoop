import React from "react";
import './Form.css';

export const FormBtn = props => (
    <button {...props} style={{ float: "left", marginBottom: 50, marginLeft: 100}} className="btn btn-success">
        {props.children}
    </button>
);