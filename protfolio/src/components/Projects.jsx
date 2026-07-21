import "../css/projects.css";
import { motion } from "framer-motion";
import protfolio from "/src/assets/protfolio.png";
import todo from "/src/assets/todo.webp";
import hello from "/src/assets/hello.png";
import guess from "/src/assets/guess.png";

const projects = [
  {
    title: "Portfolio Website",
    image: (protfolio),
    description: "Responsive portfolio built with React and Bootstrap.",
    live: "https://lokee05112006-netizen.github.io/portfolio/",
    github: "https://github.com/lokee05112006-netizen/portfolio"
  },
  {
    title: "Todo App",
    image: (todo),
    description: "Task management application using React.",
    live: "https://lokee05112006-netizen.github.io/TODO-List/",
    github: "https://github.com/lokee05112006-netizen/TODO-List"
  },
  {
    title: "Hello Movie Website",
    image: (hello),
    description: "A responsive movie website built using HTML, CSS, Bootstrap and JavaScript.",
    live: "https://lokee05112006-netizen.github.io/Hello-Movie-Website/",
    github: "https://github.com/lokee05112006-netizen/Hello-Movie-Website"
  },
  {
    title: "Guess Number Game",
    image: (guess),
    description: "A fun number guessing game built using HTML, CSS and JavaScript.",
    live: "https://lokee05112006-netizen.github.io/guess-number/",
    github: "https://github.com/lokee05112006-netizen/guess-number"
  }
];

function Projects() {
  return (
    <section className="projects py-5" id="projects">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-6 col-md-6 mb-4" key={index}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="card projectCard"
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />

                <div className="card-body">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info me-2"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;