import React from 'react';
import './Interlude.css'; 
import interludeImage from '../assets/interlude.png'; 

function Interlude() {
    return (
        <div className="interlude-container">
            <img src={interludeImage} alt="Interlude" className="interlude-image" />
        </div>
    );
}

export default Interlude;
