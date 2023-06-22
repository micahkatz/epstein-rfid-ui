import React from 'react';
import logo from './logo.svg';
import './VisitorList.scss';
import { InputContext } from '../context/inputContext';

function VisitorList() {
    const inputContext = React.useContext(InputContext)
    const sortedAttendees = inputContext.currAttendees.sort((a, b) => a.name.split(' ').slice(-1).join(' ').localeCompare(b.name.split(' ').slice(-1).join(' ')))

    return (
        <div className="VisitorList">
            {sortedAttendees.length > 0 ? sortedAttendees.map(attendee => (
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
