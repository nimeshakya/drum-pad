import React from 'react';

import Pad from './components/Pad';
import Controls from './components/Controls';

import { padData } from './pad_data';

const App = () => {
    return (
        <div id='drum-machine'>
            <div id='pad-container'>
                {padData.map((pad) => {
                    return (
                        <Pad
                            key={pad.id}
                            triggerKey={pad.trigger_key}
                            file={pad.file_name}
                            id={pad.id}
                        />
                    );
                })}
            </div>
            <Controls />
        </div>
    );
};

export default App;
