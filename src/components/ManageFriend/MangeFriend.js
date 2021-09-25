import React, { useEffect, useState } from 'react';

const MangeFriend = () => {
    const [friend, setFriends] = useState([]);
    const [singleStudent, setSingleStudent] = useState([]);
    const [editedStudentData, setEditedStudentData] = useState({})
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
            //window.location.reload(false);
        })
    }
    const loadStudentData = (id) => {
        fetch(`http://localhost:5000/singleStudent/${id}`)
            .then(res => res.json())
            .then(data => setSingleStudent(data))
    }
    const handleBlur = (e) => {
        
    }
    const updateStudentData = (id) => {
        console.log('updating');
        const email = singleStudent.email;
        const about = singleStudent.about;
        const name = singleStudent.name;
        const data = {email, about, name};
        fetch(`http://localhost:5000/update/${id}`, {
          method: 'PATCH',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((err, result) => {
          // console.log('updated');
          console.log(err);
        //   window.location.reload(false);
        })
        }
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4 mt-5">
                    <form>
                        <input onBlur={handleBlur} className='form-control ' type='text' name='name' placeholder={singleStudent.name} required  /><br />
                        <textarea onBlur={handleBlur} className='form-control ' type='text' name='about' required   placeholder={singleStudent.about}></textarea><br />
                        <input onBlur={handleBlur} className='form-control ' type='email' name='email' placeholder={singleStudent.email}  required   /><br />
                        <button className='btn btn-info'  onClick={() => updateStudentData(singleStudent._id)}>Update</button>
                    </form>
                </div>
                <div className="col-md-5">
                    {
                        friend.map(friend => <div className="d-flex justify-content-around mt-5 border-b">
                            <h6 className="mt-2 mb-2">{friend.roll}</h6>
                            <h6 className="mt-2 mb-2">{friend.nickname}</h6>
                            <button className="btn btn-primary mb-1" onClick={() => deleteStudent(friend._id)}>Delete</button>
                            <button className="btn btn-secondary mb-1" onClick={() => loadStudentData(friend._id)}>Update</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MangeFriend;