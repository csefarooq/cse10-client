import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import img from '../../image/loading.gif';
import './Friend.css'
const Friends = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('https://pure-tundra-14446.herokuapp.com/students')
        .then(res => res.json())
        .then(data => setStudents(data))
        .catch(err => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <h1 className="text-center mt-3">CSE 10th Batch - PUST</h1>
            <h3 className="text-center mb-3">Total Students: {students.length}</h3>
            <div className="row">
                {
                    students.length === 0 && <h6 className="text-center mt-5">Loading...</h6>
                }
                {
                    students.map(friend => <Friend friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;