"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  // take one array and inside that we store the multiple object key:value pair 
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
    title: "Razorpay Web Application",
    description: "I successfully developed a sophisticated clone of Razorpay, a premier payment gateway, using HTML and Tailwind CSS. This project underscores my proficiency in front-end web development and my ability to recreate complex, modern web applications with a focus on both aesthetics and functionality The clone is meticulously designed to be fully responsive.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari659tri/Razorpay-Website.git",
    previewUrl: "https://razorpayweb.netlify.app/",
  },
  {
    id: 4,
    title: "Random_Password_Generator-Web_App",
    description: "This is random Password generator with many functionality i made it with the help of html CSS Javascript and used one famous algorithm fisher yates Algorithm to shuffle the password so that it will be more secure and strong becomes password generator app has main key features like Creates strong passwords with uppercase, lowercase, numbers, and special characters or symbols.you can copy the password to the clipboard",

    image: "/images/projects/4.png",
    tag: ["All", "Design"],
    gitUrl: "https://github.com/hari659tri/Random_PassWord_Generator-Web-App-.git",
    previewUrl: "https://hari659tri.github.io/Random_PassWord_Generator-Web-App-/",
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
    title: "Parrlex Effect",
    description: "Excited to Share: Mastered Advanced CSS for Stunning Parallax Effect! 🚀 🎨 Elevating my web design game with a touch of magic! ✨ After diving deep into the world of Advanced CSS",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari659tri/parralexEffect.git",
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
