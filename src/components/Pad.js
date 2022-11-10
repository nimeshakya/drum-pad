import React, { useRef, useEffect } from 'react';

const Pad = ({
    play,
    removeClass,
    triggerKey,
    file,
    id,
    keyCode,
    volume,
    setCurrentSound,
}) => {
    const audioRef = useRef(null);

    const handlePadHit = () => {
        audioRef.current.play();
        audioRef.current.parentElement.className = 'drum-pad-active';
        setCurrentSound(audioRef.current.parentElement.id);
        setTimeout(() => removeClass(audioRef.current), 100);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === keyCode) {
            play(triggerKey);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        audioRef.current.volume = volume;
    });

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
