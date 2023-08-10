import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                If you may have to know more about my work, then feel free to
                connect with me. I would be happy to give the answer!
            </h4>
            <div className="contact-option">
                <AiFillLinkedin />
                <span>
                    <a
                        className="text"
                        href="https://www.linkedin.com/in/suraj-singhal-2980a41ba/"
                    >
                        Visit My Linked Profile
                    </a>{" "}
                </span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">surajsinghal6680@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
