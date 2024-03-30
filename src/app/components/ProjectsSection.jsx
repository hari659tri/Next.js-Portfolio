"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HealthCare Innovation",
    description: "this Is my HealthCare Website under Hack-a-thon HackFest( Delhi/NCR) GEEKS FOR Geeks which is Now Live .The system should continuously gather and analyze healthcare data while promoting healthy lifestyles and wellness practices.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari659tri/healthCare-Solution-.git",
    previewUrl: "https://healthcareinnovationorg.netlify.app/",
  },
  {
    id: 2,
    title: "Cryptocurrency Live Price Tracker",
    description: "this is live price tell of cryptocurrency based On current Actual Market Price,Price Accuracy 100%,because in this I fetched api From the The most reliable & comprehensive cryptocurrency data API for traders and developers(Geek Coin)Live Price of Cryptocurrency",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari659tri/CryptoCurrency.git",
    previewUrl: "https://harti659tricryptocurrprice.netlify.app/",
  },
  {
    id: 3,
    title: "ChatBot",
    description: "I am  used Microsoft DialoGPT, a pre-trained language model that can generate human-like responses to given prompts. I am integrating DialoGPT with Flask, a popular Python web framework, to create a web application that can communicate with users via a chat interface. For the frontend part i uesd  html css and javascript",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari659tri/Chatbot.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Spotify Web Clone",
    description: "This is a  spotify clone Web Application that Will i am made Using with the help of html css and javaScript. That Have Various Features Like Play, Pause, Next, Previous, Shuffle, Repeat, Volume Control, Seekbar, Playlist, and many more.",
    image: "/images/projects/4.png",
    tag: ["All", "Design"],
    gitUrl: "https://github.com/hari659tri/Spotify-Clone-Website.git",
    previewUrl: "https://spotify-clone12w.netlify.app/",
  },
  {
    id: 5,
    title: "To-Do App",
    description: "Using a Create Read Update Delete(CRUD) operations I made a To-Do App that is used to manage the daily tasks of the user. The user can add, delete, and update the tasks. The user can also mark the task as completed. The user can also search for the tasks.The user can also filter the tasks based on the status of the task. The user can also perform the bulk",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari659tri/to-do-list.git",
    previewUrl: "https://hari659tri.github.io/to-do-list/",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description: "This is a Netflix clone Web Application that Will i am made Using with the help of html css .That Have Various Features Like",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari659tri/Netflix_Clone.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
