import React from 'react';

import './Button.css';

declare interface ButtonProps {
    onClick?: () => void
    // testComponent?: JSX.Element
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className="AppButton" onClick={props.onClick}>
            {props.children || 'Button'}
            {/* {props.testComponent || 'Component de Teste'} */}
        </button>
    );
};

export default Button;