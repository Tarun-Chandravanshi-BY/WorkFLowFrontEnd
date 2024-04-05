import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userdetails } from '../../const';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const AvailableShifts = () => {
    const [shifts, setShifts] = useState([]);

    useEffect(() => {
        const fetchShifts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/shift/getavailableshifts');
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

    const handleRequestShift = async (shift) => {
        try {
            const userid = userdetails.userId;
            const response = await axios.put(`http://localhost:8000/shift/requestshift/${userid}`, { ...shift });
            console.log(response.data);
            toast.success('Shift request sent successfully'); // Display success message
        } catch (error) {
            console.error('Failed to request shift:', error.message);
            toast.error('Failed to send shift request'); // Display error message
        }
    };

    return (
        <div className="shifts-container">
            <h1 className="shifts-heading">Available Shifts</h1>
            <div className="shifts-list">
                {shifts.map(shift => (
                    <div key={shift.shiftId} className="shift-item">
                        <div className="shift-details">
                            <p className="shift-description"><h3 className="font-semibold inline"> Job : </h3> {shift.shiftJobDescription}</p>
                            <p className="shift-time"><h3 className="font-semibold inline">Start Time : </h3> {new Date(shift.shiftStartTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            <p className="shift-time"><h3 className="font-semibold inline">End Time : </h3> {new Date(shift.shiftEndTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                        <button
                            className="request-shift-btn"
                            onClick={() => {
                                handleRequestShift(shift);
                                console.log(shift);
                            }}
                        >
                            Request Shift
                        </button>
                    </div>
                ))}
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={700} // Close the notification after 3 seconds
                hideProgressBar={true} // Hide the progress bar
                newestOnTop={true} // Show newest notification on top
                closeOnClick={false} // Close the notification when clicked
                rtl={false} // Left-to-right layout
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />

        </div>
    );
};

export default AvailableShifts;
