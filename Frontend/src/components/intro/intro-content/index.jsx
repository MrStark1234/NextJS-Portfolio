import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FiSlack } from "react-icons/fi";

import photo from "../../../images/photo.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Suraj Singhal</span>
                    </h1>
                    <p className="title">
                        Full Stack Web Developer{" "}
                        <big style={{ color: "#ffdb44" }}>"MERN Stack"</big>{" "}
                        with a high level of experience in Web Development and
                        Designing, producting the quality work
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={photo}
                        alt="Hello I am Suraj Singhal"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">2 times Hackathon Winner</div>
                    </div>

                    <div className="highlights verticle">
                        <div className="icon">
                            <FiSlack />
                        </div>
                        <div className="text">
                            <span>10+</span>
                            Completed Projects
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
