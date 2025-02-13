"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-COMMERCE",
    description: "",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/IqraManawar/e-commerce.git",
    previewUrl: "https://e-commerce-fawn-psi-87.vercel.app/",
  },
  {
    id: 2,
    title: "SHOP",
    description: "",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/IqraManawar/shopping.git",
    previewUrl: "https://shopping-kmnu.vercel.app/",
  },
  {
    id: 3,
    title: "",
    description: "",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/IqraManawar/structure1.git",
    previewUrl: "https://structure1.vercel.app/",
  },
  {
    id: 4,
    title: "HTML",
    description: "PROJECT",
    image: "",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/IqraManawar/milestone-1-2.git, https://github.com/IqraManawar/milestone-3.git, https://github.com/IqraManawar/milestone-4.git, https://github.com/IqraManawar/milestone-5.git",
    previewUrl: "http://127.0.0.1:5501/index.html, http://127.0.0.1:5500/index.html, http://127.0.0.1:5500/, http://127.0.0.1:5500/index.html",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/IqraManawar/GI-45-assignment-of-typescript.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag:string) => {
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
          name="Mobile"
          isSelected={tag === "Mobile"}
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