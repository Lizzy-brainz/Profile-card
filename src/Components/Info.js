import React from "react";
import Image from "../Images/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons'
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons"


const Info = () => {
  return (
    <>
      <div className="info">
        <div className="info-box">
          <img className="info-img" src={Image} alt="my-profile" />
        </div>
        <div className="name">
          <h3 className="info-name">Elizabeth Onoja</h3>
          <p className="info-position">Frontend Developer</p>
          <p className="website-name">lizzybrainz.com</p>
        </div>
        <div className="info-btn-wrap">

        <div className="info-btn-wrapper">
            <a href="#" className="btn-white-wrapper">
            <FontAwesomeIcon icon={faEnvelope} color="blue" className="info-email-icon" />
            <p className="info-btn-text">Email</p>
            </a>
        </div>
        <div className="info-btn-wrapper">
            <a href="#" className="btn-white-wrapper linkedin">
            <FontAwesomeIcon icon={faAddressBook} color="blue"  className="info-social-icon"/>
            <p className="info-btn-text linkedin-text">LinkedIn</p>
            </a>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default Info;
