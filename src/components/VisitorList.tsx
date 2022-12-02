import React from 'react';
import logo from './logo.svg';
import './VisitorList.scss';
import { InputContext } from '../context/inputContext';

function VisitorList() {
    const inputContext = React.useContext(InputContext)
    return (
        <div className="VisitorList">
            {inputContext.currAttendees.length > 0 ? inputContext.currAttendees.map(attendee => (
                <div className='visitor'>
                    <p className='visitor-name'>{attendee.name}</p>
                </div>
            ))
                : <div>
                    <div className='visitor'>
                        <p className='visitor-name'>There is no one in the building.</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default VisitorList;
