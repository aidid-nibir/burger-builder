import React from 'react';
import './BuildControl.css'

const Buildcontrol = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.lable}</div>
            <button className='Less' onClick={props.removed} disabled={props.disabled}>Less</button>
            {/* The line Bellow adds restriction to add multiple ingredients while building the burger */}
            {/* <button className='More' onClick={props.added} disabled = {!props.disabled}>Add</button> */}
            <button className='More' onClick={props.added}>Add</button>
        </div>
    );
}

export default Buildcontrol;
