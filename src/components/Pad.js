import React, { useRef } from 'react';

const Pad = ({ triggerKey, file, id }) => {
    const audioRef = useRef(null);

    const handlePadHit = () => {
        console.log(audioRef.current);
        audioRef.current.play();
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
