import React, { useState, useEffect } from 'react';
import './styles.css';

const TextComponent = (props: { name: string }) => {
    const [age, setAge] = useState(21)

    useEffect(() => {
        console.log('Component was created');
    }, []);

    useEffect(() => {
        console.log('Component alterado');
    }, [age]);

    return (
        <div className="container">
            <h1>{age}</h1>
            <button onClick={(e) => setAge(age + 2)}>Button</button>
        </div>
    )
}

export default TextComponent;