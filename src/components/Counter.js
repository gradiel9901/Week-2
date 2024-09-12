import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({
        increment: { top: 0, left: 0 },
        decrement: { top: 0, left: 0 },
        reset: { top: 0, left: 0 },
    });

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    const moveButton = (button) => {
        const randomX = Math.random() * 200 - 100; // Random position change between -100px and 100px
        const randomY = Math.random() * 200 - 100;
        setButtonPosition((prevPosition) => ({
            ...prevPosition,
            [button]: {
                top: prevPosition[button].top + randomY,
                left: prevPosition[button].left + randomX,
            },
        }));
    };

    return (
        <div className="counter">
          <h1> REACH 10! </h1>
            <h2>Counter: {count}</h2>

            <button
                onClick={increment}
                onMouseEnter={() => moveButton('increment')}
                style={{
                    position: 'relative',
                    top: `${buttonPosition.increment.top}px`,
                    left: `${buttonPosition.increment.left}px`,
                }}
            >
                Increment
            </button>

            <button
                onClick={decrement}
                onMouseEnter={() => moveButton('decrement')}
                style={{
                    position: 'relative',
                    top: `${buttonPosition.decrement.top}px`,
                    left: `${buttonPosition.decrement.left}px`,
                }}
            >
                Decrement
            </button>

            <button
                onClick={reset}
                onMouseEnter={() => moveButton('reset')}
                style={{
                    position: 'relative',
                    top: `${buttonPosition.reset.top}px`,
                    left: `${buttonPosition.reset.left}px`,
                }}
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;
