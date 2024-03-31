import React from 'react';
import './Portfolio.css'; // Make sure this is linked correctly

// Example project data
const projects = [
  {
    id: 1,
    title: 'Project One',
    imageUrl: 'https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg',
    projectUrl: 'https://github.com/dubeyaditya9452/social',
  },
  {
    id: 2,
    title: 'Project Two',
    
    imageUrl: 'https://webthemez.com/wp-content/uploads/2018/12/gym_plus.jpg',
    projectUrl: 'https://github.com/dubeyaditya9452/gym-',
  },
  {
    id: 3,
    title: 'Project Three',
    
    imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/ecommerce-website-builder.jpg',
    projectUrl: 'https://github.com/dubeyaditya9452/Ecommmerce',
  },
  {
    id: 4,
    title: 'Project Four',
    
    imageUrl: 'https://cdn.dribbble.com/userupload/6388819/file/original-21da980c8f656fb4c6a54ef72e8592df.jpg?resize=1600x1200',
    projectUrl: 'https://github.com/dubeyaditya9452/Hotel-Booking',
  },
  {
    id: 5,
    title: 'Project Five',
   
    imageUrl: 'https://muffingroup.com/blog/wp-content/uploads/2021/07/Rise-and-Grind.jpg',
    projectUrl: 'https://github.com/dubeyaditya9452/food',
  },
  {
    id: 6,
    title: 'Project Six',
    
    imageUrl: 'https://assets.awwwards.com/awards/submissions/2017/12/5a29435e59318.jpg',
    projectUrl: 'http://project-three-link.com',
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
      <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
      </div>
  );
}
