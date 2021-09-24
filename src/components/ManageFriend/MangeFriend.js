import React, { useEffect, useState } from 'react';

const MangeFriend = () => {
    const [friend, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://pure-tundra-14446.herokuapp.com/students')
        .then(res => res.json())
        .then(data => setFriends(data))
        .catch(err => {
            console.log(err.message);
        })
    })
    const deleteStudent = (id) => {
        console.log(id);
        fetch(`https://pure-tundra-14446.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            alert('deleted successfully');
            window.location.reload(false);
        })
    }
    const updateStudent = (id) => {
        console.log(id);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-5">
                    {
                        friend.map(friend => <div className="d-flex justify-content-around mt-5 border-b">
                            <h6 className="mt-2 mb-2">{friend.roll}</h6>
                            <h6 className="mt-2 mb-2">{friend.nickname}</h6>
                            <button className="btn btn-primary mb-1" onClick={() => deleteStudent(friend._id)}>Delete</button>
                            <button className="btn btn-secondary mb-1" onClick={() => updateStudent(friend._id)}>Update</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MangeFriend;