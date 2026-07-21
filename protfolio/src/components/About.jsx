import "../css/about.css";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "/src/assets/lokesh-img.jpeg";

function About() {
  return (
    <section id="about" className="about py-5">
      <div className="container">

        <motion.h2
          className="text-center section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          About Me
        </motion.h2>

        <div className="row align-items-center mt-5">

          <div className="col-lg-5 text-center">

            <motion.img
              src={profile}
              className="profile-img img-fluid"
              whileHover={{ scale: 1.05 }}
            />

          </div>

          <div className="col-lg-7">

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >

              <span className="about-tag">
                🚀 React Developer
              </span>

              <h2 className="mt-3">
                Hi, I'm Lokesh 👋
              </h2>

              <p className="about-text">
                I'm a passionate B.Tech Information Technology student who
                enjoys building responsive websites and modern web
                applications using React, Bootstrap and JavaScript.
                I love creating beautiful user interfaces and learning
                new technologies every day.
              </p>

              <div className="row mt-4">

                <div className="col-md-6">
                  <div className="info-card">
                    <strong>Name</strong>
                    <p>Lokesh A</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-card">
                    <strong>Education</strong>
                    <p>B.Tech Information Technology</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-card">
                    <strong>Location</strong>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-card">
                    <strong>Email</strong>
                    <p>lokee05112006@gmail.com</p>
                  </div>
                </div>

              </div>

              <div className="row mt-4">

                <div className="col-md-4">

                  <div className="stat-card">

                    <FaCode size={35} />

                    <h3>10+</h3>

                    <p>Projects</p>

                  </div>

                </div>

                <div className="col-md-4">

                  <div className="stat-card">

                    <FaLaptopCode size={35} />

                    <h3>5+</h3>

                    <p>Technologies</p>

                  </div>

                </div>

                <div className="col-md-4">

                  <div className="stat-card">

                    <FaGraduationCap size={35} />

                    <h3>2028</h3>

                    <p>Graduate</p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;