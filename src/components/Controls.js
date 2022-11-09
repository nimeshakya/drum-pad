import React from 'react';

const Controls = ({ currentSound }) => {
    return (
        <div id='controls-containers'>
            <h1 id='machine-name'>Drum Machine</h1>
            <p id='display'>{currentSound}</p>
            <input
                type='range'
                name='volume-slider'
                id='volume-slider'
                min='0'
                max='1'
                step='0.01'
            />
        </div>
    );
};

export default Controls;
