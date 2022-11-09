import React from 'react';

const Controls = ({ currentSound, setCurrentSound, volume, setVolume }) => {
    const handleVolumeChange = (e) => {
        let adjustedVolume = e.target.value;
        setVolume(adjustedVolume);
        setCurrentSound('Volume: ' + Math.round(adjustedVolume * 100));
    };

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
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    );
};

export default Controls;
