import React from 'react';
import './Interlude2.css'; 
import interludeImage from '../assets/interlude2.png'; 

function Interlude() {
    return (
        <div className="interlude-container">
            <img src={interludeImage} alt="Interlude" className="interlude-image" />
        </div>
    );
}

export default Interlude;
