import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Friend.css';

const Friend = (props) => {
    const {name, nickname, email, lId, phone, img, roll, blood, fId, gId, about } = props.friend;
    return (
        <div className="col-md-4 mb-2 p-1">
            <div className="card w-100 h-100">
                <div className="row justify-content-center align-item-center">
                    <img className="card-img-top profile-img" src={img} alt=""/>
                </div>
                <div className="card-body text-center">
                    <a href={lId} target="_blank" rel="noreferrer" className="me-2">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </a>
                    <a href={fId} target="_blank" rel="noreferrer" className="me-2">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    </a>
                    <a href={gId} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </a>
                    <p><small>@{nickname}</small></p>
                    <h6 className="card-title">{name}</h6>
                    <blockquote><small><em>{about}</em></small></blockquote>
                    <p className="d-flex justify-content-around p-1"><span>Id: {roll} </span><span className="text-danger">Blood: {blood}</span></p>
                    <p>{phone} <span><a href="mailto:${email}">{email}</a></span></p>
                    {/* <div className="d-flex justify-content-between align-items-center">
                        <a href={website} className="btn btn-primary">Website</a>
                        <a href="mailto:${email}">{email}</a>
                        <a href="" className="btn btn-primary">Resume</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Friend;