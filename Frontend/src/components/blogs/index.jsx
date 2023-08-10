import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blogs/vid.png";
import Blog2 from "../../images/blogs/vid1.jpeg";
import Blog3 from "../../images/blogs/vid2.png";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Videos and Blogs"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Suraj Singhal"
                    date="August 8 2023"
                    image={Blog1}
                    title="How to write our own map function using JavaScript"
                    description="Here we learn to write our own logic to make our own .map function using JavaScript"
                />

                <BlogCard
                    user="Suraj Singhal"
                    date="August 03 2023"
                    image={Blog3}
                    title="Trying to solve some leetCode Questions"
                    description="Here we take some challenges on LeetCode and trying to solve the questions using JavaScript"
                />
                <BlogCard
                    user="Suraj Singhal"
                    date="August 9 2023"
                    image={Blog2}
                    title="How to write our own filter function using JavaScript"
                    description="Here we learn to write our own logic to make our own .fitler function using JavaScript"
                />
            </div>
        </Section>
    );
};

export default Blogs;
