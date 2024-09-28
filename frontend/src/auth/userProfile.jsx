import React, { useState } from 'react';
import './userProfile.css';

const userProfile = () => {
  const [shift1, setShift1] = useState('');
  const [shift2, setShift2] = useState('');

  const shifts = [
    '06:00 - 14:00',
    '14:00 - 22:00',
    '22:00 - 06:00'
  ];

  const handleShift1Change = (e) => {
    setShift1(e.target.value);
    if (shift2 === e.target.value) {
      setShift2('');
    }
  };

  const handleShift2Change = (e) => {
    setShift2(e.target.value);
    if (shift1 === e.target.value) {
      setShift1('');
    }
  };

  return (
    <div className="container">
      <h1>DTC DELHI CREW DETAILS</h1>
      <div className="form-container">
        <div className="profile-pic">
          <img src="https://via.placeholder.com/100" alt="profile" />
        </div>
        <div className="input-group">
          <label>Id</label>
          <input type="text" placeholder="Id" />
        </div>
        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="input-group">
          <label>Phone Num</label>
          <input type="text" placeholder="Phone Num" />
        </div>
        <div className="input-group">
          <label>Age</label>
          <input type="number" placeholder="Age" />
        </div>
        <div className="input-group">
          <label>Role</label>
          <input type="text" placeholder="Role" />
        </div>
        <div className="shift-container">
          <div className="shift-group">
            <label>Shift 1</label>
            <select value={shift1} onChange={handleShift1Change}>
              <option value="">Select Shift 1</option>
              {shifts.map((shift, index) => (
                <option key={index} value={shift} disabled={shift === shift2}>
                  {shift}
                </option>
              ))}
            </select>
          </div>
          <div className="shift-group">
            <label>Shift 2</label>
            <select value={shift2} onChange={handleShift2Change}>
              <option value="">Select Shift 2</option>
              {shifts.map((shift, index) => (
                <option key={index} value={shift} disabled={shift === shift1}>
                  {shift}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default userProfile;