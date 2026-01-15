import React from 'react';
import ProjectCard from '../organisms/ProjectCard';
import CounterSection from '../organisms/CounterSection';
import { motion } from 'motion/react';

// Images
import img1 from '../../assets/project01.jpg';
import img2 from '../../assets/project02.jpg';
import img3 from '../../assets/project04.jpg'; // Using 04 as third
import img4 from '../../assets/project05.jpg'; // Using 05 as fourth

const projects = [
  {
    id: 1,
    title: "Business Consulting",
    category: "Business Strategy",
    image: img1,
    link: "/project-details"
  },
  {
    id: 2,
    title: "Digital Agency",
    category: "Business Services",
    image: img2,
    link: "/project-details"
  },
  {
    id: 3,
    title: "Business Accounting",
    category: "Financing Management",
    image: img3,
    link: "/project-details"
  },
  {
    id: 4,
    title: "Marketing Idea",
    category: "Modern Strategy",
    image: img4,
    link: "/project-details"
  }
];

function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full h-auto overflow-hidden">
      {/* Project Cards Row */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants} className="w-full md:w-1/2 lg:w-1/4">
            <ProjectCard
              title={project.title}
              category={project.category}
              image={project.image}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Counter Section Component */}
      <CounterSection />
    </section>
  );
}

export default Project;
