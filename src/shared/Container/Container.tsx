import React from 'react';

import './Container.css';

declare interface ContainerProps{
    
}

const Container: React.FC = (props) => {
    return (
        <div className="AppContainer">
            {props.children}
        </div>
    );
};

export default Container;