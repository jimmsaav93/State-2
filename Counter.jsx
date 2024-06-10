import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

const Counter = ({ initialCount, decrementAmount }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - decrementAmount);
    };

    const reset = () => {
        setCount(initialCount);
    };

    return (
        <div>
            <CounterDisplay count={count} />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;