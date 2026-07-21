import "../css/education.css";
import { FaGraduationCap, FaSchool, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="education" id="education">

      <div className="container">

        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Education Journey 🎓
        </motion.h2>

        <div className="timeline">

          {/* College */}

          <motion.div
            className="timeline-card left"
            whileHover={{ scale: 1.03 }}
          >

            <div className="icon">
              <FaGraduationCap />
            </div>

            <div className="content">

              <span className="year">
                2024 - Present
              </span>

              <h3>B.Tech Information Technology</h3>

              <h5>Annai Mira College of Engineering and Technology</h5>

              <p>
                Learning Full Stack Development, Data Structures,
                React, Database Management Systems, AI and Cloud
                Computing.
              </p>

            </div>

          </motion.div>

          {/* School */}

          <motion.div
            className="timeline-card right"
            whileHover={{ scale: 1.03 }}
          >

            <div className="icon">
              <FaSchool />
            </div>

            <div className="content">

              <span className="year">
                Higher Secondary
              </span>

              <h3>Computer Science</h3>

              <h5>N. Krishnaswamy Mudaliar Hr. Sec. School</h5>

              <p>
                Built a strong foundation in programming,
                mathematics and computer science.
              </p>

            </div>

          </motion.div>

        </div>

        <div className="achievement">

          <FaAward className="award-icon" />

          <div>

            <h4>Current Goal</h4>

            <p>
              Becoming a Full Stack React Developer and continuously
              improving my skills through projects and practical learning.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;