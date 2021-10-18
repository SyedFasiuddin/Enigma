import React from 'react';
import Plugboard from './Plugboard';
import RotarSide from './RotorSide';
import './Body.css';

function Body() {
    return (
        <div id="container">
            <RotarSide />
            <Plugboard />
        </div>
    );
}

export default Body;
