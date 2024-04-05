import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userdetails } from '../../const';
import './index.css';

const AssignedShifts = () => {
    const [shifts, setShifts] = useState([]);

    useEffect(() => {
        const fetchShifts = async () => {
            try {
                const userid = userdetails.userId;
                const response = await axios.get(`http://localhost:8000/shift/getshiftsAssignedtoEmployee/${userid}`);
                if (response.status === 200) {
                    setShifts(response.data);
                } else {
                    console.error('Failed to fetch shifts:', response.statusText);
                }
            } catch (error) {
                console.error('Failed to fetch shifts:', error.message);
            }
        };

        fetchShifts();
    }, []);

    return (
        <div className="assigned-shifts-container">
            <h1 className="assigned-shifts-heading">Assigned Shifts</h1>
            <ul className="assigned-shifts-list">
                {shifts.map(shift => (
                    <li key={shift.shiftId} className="assigned-shift-item">
                        <div className="assigned-shift-details">
                        <p className="assigned-shift-description"><h3 className="font-semibold inline">Job : </h3> {shift.shiftJobDescription}</p>
                            <p className="assigned-shift-time"><h3 className="font-semibold inline">Start Time : </h3> {new Date(shift.shiftStartTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            <p className="assigned-shift-time"><h3 className="font-semibold inline">End Time : </h3> {new Date(shift.shiftEndTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AssignedShifts;
