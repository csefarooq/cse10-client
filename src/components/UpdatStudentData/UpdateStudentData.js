import React, { useState } from 'react';

const UpdateStudentData = ({ id }) => {
    const [singleStudent, setSingleStudent] = useState([]);

    //single student update
    const handleEdit = () => {
        alert(id)
        fetch(`http://localhost:5000/singleStudent/${id}`)
            .then(res => res.json())
            .then(data => setSingleStudent(data))
    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("clicked")
    }
   
    console.log(singleStudent)
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4">

                </div>
                <div className="col-md-6">
                    <div className='text-center d-inline'>         
                        <form onSubmit={handleSubmit}>
                            <input className='form-control ' type='text' name='name' required   /><br />
                            <input className='form-control ' type='text' name='about' required   /><br />
                            <input className='form-control ' type='email' name='email'  required   /><br />
                            <button className='btn btn-info'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateStudentData;