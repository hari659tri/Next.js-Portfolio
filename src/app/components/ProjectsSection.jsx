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
    title: "Object-Detection-ML-Model",
    description: "I have developed an object detection model using React.js and TensorFlow.js, leveraging the pre-trained COCO-SSD model from @tensorflow-models/coco-ssd. To capture real-time data, I integrated the react-webcam library, which allows seamless webcam input. This project enhances my learning experience by enabling real-time object detection",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari659tri/Object-Detection-ML-Model-.git",
    previewUrl: "https://object-detection-ml-model.vercel.app/",
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
    title: "ECELL&ISC Offical Website",
    description: "This repository contains the React-based source code for the official website of the Entrepreneurship Cell (E-Cell) at Dr. Ambedkar Institute of Technology for Handicapped, Kanpur. The E-Cell is committed to fostering entrepreneurship among students by providing a platform for innovation, collaboration, and business mentorship.",

    image: "/images/projects/4.png",
    tag: ["All", "Design"],
    gitUrl: "https://github.com/hari659tri/React-App-ECELL_AITH.git",
    previewUrl: "https://react-app-ecell-aith.vercel.app/",
  },
  {
    id: 5,
    title: "Gemini-2.0",
    description: "Gemini@2.0 is an AI-driven web application built using React.js, designed to deliver advanced insights and user interaction through the integration of the Gemini API and Google AI Studio. This project highlights the fusion of AI with modern web development, providing a responsive and efficient interface for users to engage with AI-powered functionalities seamlessly.",

    image: "/images/projects/5.png",
    tag: ["All", "Design"],
    gitUrl: "https://github.com/hari659tri/Gemini-2.0.git",
    previewUrl: "https://gemini-2-0-pwyb.vercel.app/",
  },
  {
    id: 6,
    title: "LeetCode-Metrics-Dashboard",
    description: "This project provides a comprehensive dashboard displaying detailed user activity and statistics from LeetCode. It fetches data using LeetCode's GraphQL API and a proxy URL to bypass CORS restrictions.",

    image: "/images/projects/6.png",
    tag: ["All", "Design"],
    gitUrl: "https://github.com/hari659tri/LeetCode-Metrics-Dashboard.git",
    previewUrl: "https://leet-code-metrics-dashboard.vercel.app/",
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
