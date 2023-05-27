import React, {useState} from 'react';
import './Counter.scss'
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            {count}
            <button onClick={() => setCount(prev => prev + 1)} >Click!</button>
        </div>
    );
};

export default Counter;