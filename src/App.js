import React, { useState } from 'react';

import Pad from './components/Pad';
import Controls from './components/Controls';

import { padData } from './pad_data';

const App = () => {
    // function uses vanilla javascript because I don't know other way currently
    const [currentSound, setCurrentSound] = useState('');
    const [volume, setVolume] = useState(0.5);

    const removeClass = (audio) => {
        audio.parentElement.className = 'drum-pad';
    };

    const play = (key) => {
        const audio = document.getElementById(key);
        audio.currentTime = 0;
        audio.play();
        setCurrentSound(audio.parentNode.id);
        audio.parentElement.className = 'drum-pad-active';
        setTimeout(() => removeClass(audio), 100);
    };

    return (
        <>
            <div id='drum-machine'>
                <div id='pad-container'>
                    {padData.map((pad) => {
                        return (
                            <Pad
                                play={play}
                                removeClass={removeClass}
                                key={pad.id}
                                triggerKey={pad.trigger_key}
                                file={pad.file_name}
                                id={pad.id}
                                keyCode={pad.keyCode}
                                volume={volume}
                                setCurrentSound={setCurrentSound}
                            />
                        );
                    })}
                </div>
                <Controls
                    currentSound={currentSound}
                    setCurrentSound={setCurrentSound}
                    volume={volume}
                    setVolume={setVolume}
                />
            </div>
            <p id='creator'>
                by{' '}
                <a
                    href='https://www.instagram.com/thesaucymind/'
                    id='creator-link'
                >
                    nimeshakya
                </a>
            </p>
        </>
    );
};

export default App;
