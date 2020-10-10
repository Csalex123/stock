import React from 'react';

import './Button.css';


declare interface ButtonProps {
    onClick?: () => void
    // testComponent?: JSX.Element
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className="AppButton" onClick={onClick}>
            {children || 'Button'}
            {/* {props.testComponent || 'Component de Teste'} */}
        </button>
    );
};

export default Button;