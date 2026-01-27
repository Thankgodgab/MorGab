import React from 'react';
import ProjectCard from '../molecules/ProjectCard';
import CounterSection from './CounterSection';
import { motion } from 'motion/react';
import { projectsContent } from '../../data/content';

function ProjectSection() {
  const { projects } = projectsContent;

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

export default ProjectSection;
