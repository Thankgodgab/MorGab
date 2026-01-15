import React from 'react';
import ProjectCard from '../organisms/ProjectCard';

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
  return (
    <section className="w-full h-auto flex flex-col md:flex-row">
      {projects.map((project) => (
        <div key={project.id} className="w-full md:w-1/2 lg:w-1/4">
          <ProjectCard
            title={project.title}
            category={project.category}
            image={project.image}
            link={project.link}
          />
        </div>
      ))}
    </section>
  )
}

export default Project;