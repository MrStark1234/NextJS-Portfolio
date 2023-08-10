import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import MernIcon from "../../images/mern.png";
import Section from "../shared/section";
import Resume from "../../download/Suraj_Resume-D.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        I am skilled in ReactJS, NodeJS, ExpressJS, MongoDB,
                        JavaScript, HTML-5, CSS-3, Git/GitHub, Bootstrep, VueJS,
                        Vanilla JavaScript.
                        <br />I always try to serve better experiences to the
                        client.
                        <br /> Fast load times and lag-free interaction, are my
                        highest priority.
                        <br />I always make sure that my layouts will work on
                        any device, big or small.
                        <br />
                        Sometimes websites don't have to be static, I love
                        making pages come to life.
                        <br />
                        Strong preference for easy-to-use, intuitive UX/UI.
                    </p>

                    <h2 style={{ marginTop: "40px" }}>Specialization In</h2>

                    <img
                        className="special"
                        src={MernIcon}
                        alt="MongoDB, ExpressJS, ReactJS, NodeJS"
                    />

                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
