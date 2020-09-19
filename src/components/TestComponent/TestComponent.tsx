import React, { useState } from 'react';
import './styles.css';

const TextComponent = (props: { name: string }) => {
    const [age, setAge] = useState(21)
    // const [a, setA] = useState(0);
    // const [b, setB] = useState(0);

    return (
        <div className="container">
            <h1>{age}</h1>
            {/* <input type="text" placeholder="a" value={a} onChange={e => setA(e.target.value)} />
            <input type="text" placeholder="b" value={b} onChange={e => setB(e.target.value)}/> */}
            <button onClick={(e) => setAge(age + 2)}>Button</button>
        </div>
    )
}

export default TextComponent;