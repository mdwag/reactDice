import {useState} from 'react';
function DSix(props){
    return (
        <div>
        <i className={`fas fa-dice-${props.result} fa-8x`}></i>
        </div>
    )
}

export default DSix;