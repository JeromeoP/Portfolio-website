import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai';
const SocialMedia = () => {
    return (
        <div className = "app__social">
            <div>
                <a 
                href ="https://www.linkedin.com/in/jerome-planken-6486ab116/">
                <AiFillLinkedin />
                </a>
            </div>
            <div>
                <a href = "https://www.facebook.com/jerome.planken/">
                <FaFacebook />
                </a>
            </div>
            
            <div>
                <a href = "https://www.instagram.com/jeromeop/">
                <BsInstagram />
                </a>
            </div>
            
            
        </div>
    );
};

export default SocialMedia;