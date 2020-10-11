import React from 'react';

import './Header.css';

declare interface HeaderProps {
    title?: string
}

const Header: React.FC<HeaderProps> = (props) => {
    
    return (
        <header className="AppHeader">
            <h1>{props.title || 'Teste'}</h1>
            <span>
                {
                    console.log
                }
            </span>
        </header>
    )
}

export default Header;