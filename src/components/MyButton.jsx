import React  from 'react';
import  './button.css'

const MyButton = ({children, ...props}) => {

    return (
       <button className='myBtn' {...props}>{children}</button>
    );
};

export default MyButton;