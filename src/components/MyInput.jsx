import React from 'react';
import './MyInput.css'

const MyInput = (props) => {
    return (
        <input className="myinput" {...props}/>
    );
};

export default MyInput;