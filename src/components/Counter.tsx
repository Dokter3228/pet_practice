import React, {useState} from 'react';
import classes from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={classes.btn}>
            {count}
            <button onClick={() => setCount(prev => prev + 1)} >Click!</button>
        </div>
    );
};

export default Counter;