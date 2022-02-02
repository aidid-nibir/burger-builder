import React from 'react';
import './BuildControl.css'

const Buildcontrol = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.lable}</div>
            <button className='Less' onClick={props.removed} disabled={props.disabled}>Less</button>
            <button className='More' onClick={props.added} disabled = {!props.disabled}>Add</button>
        </div>
    );
}

export default Buildcontrol;
