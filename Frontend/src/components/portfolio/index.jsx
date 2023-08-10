import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "ChatSkoot-App",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/csb.png"),
        },
    },
    {
        id: 2,
        name: "Friend's Zone-App",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/social.png"),
        },
    },
    {
        id: 3,
        name: "Portfolio-Website",
        tags: ["web-page", "web-app"],
        media: {
            thumbnail: require("../../images/portfolio/port (2).png"),
        },
    },
    {
        id: 4,
        name: "News Times of India",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/news.png"),
        },
    },
    {
        id: 5,
        name: "Quiz-Pop",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/quiz.png"),
        },
    },
    {
        id: 6,
        name: "Text-Utilizer",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/text.png"),
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
