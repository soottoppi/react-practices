import React, {useState} from 'react';

export default function ({ begin, step }) {
    const [stateVal, setVal] = useState(begin);
    const [stateStep] = useState(step);
    setInterval();

    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + stateStep);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateVal }</span>
            {' '}
            <button>
                <strong>-</strong>
            </button>
        </div>
    );
}