import React, { useRef } from 'react';
import sound from './audio/Heater-1.mp3';

const Pad = ({ triggerKey, file, id }) => {
    const audioRef = useRef(null);

    const handlePadHit = () => {
        console.log(audioRef.current);
        audioRef.current.play();
        console.log(sound);
    };

    return (
        <div className='drum-pad' id={id} onClick={handlePadHit}>
            <audio
                src={file}
                ref={audioRef}
                className='clip'
                id={triggerKey}
            ></audio>
            {triggerKey}
        </div>
    );
};

export default Pad;
