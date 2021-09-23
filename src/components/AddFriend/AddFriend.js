import React from 'react';

const AddFriend = () => {
    return (
        <form action="https://pure-tundra-14446.herokuapp.com/addFriend" method="post">
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="nickname">Nick Name</label>
                            <input type="text" name="nickname" id="nickname" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="img">Image Link</label>
                            <input type="text" name="img" id="img" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="fId">Facebook ID Link</label>
                            <input type="text" name="fId" id="fId" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="lId">LinkeDin ID Link</label>
                            <input type="text" name="lId" id="lId" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="gId">Github ID Link</label>
                            <input type="text" name="gId" id="gId" className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="blood">Blood Group</label>
                            <input type="text" name="blood" id="blood" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="roll">Roll</label>
                            <input type="text" name="roll" id="roll" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" name="phone" id="phone" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="about">About</label>
                            <textarea type="text" name="about" id="about" className="form-control"></textarea>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Add Friend</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddFriend;