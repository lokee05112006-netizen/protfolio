import "../css/hero.css";
import profile from "/src/assets/lokesh-img.jpeg";
import resume from "/src/assets/resume1.pdf";

import { FaGithub, FaLinkedin, FaReact, FaInstagram, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-overlay"></div>

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <motion.span 
                            className="hero-badge"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            👋 Welcome to my Portfolio
                        </motion.span>

                        <h1 className="hero-title">
                            Hi, I'm <span>Lokesh</span>
                        </h1>

                        <h3 className="typing">
                            Full Stact Developer • IT Student
                        </h3>

                        <p className="hero-text">
                            I create beautiful, responsive and interactive web applications
                            using React, Bootstrap and JavaScript with a focus on clean UI
                            and user experience.
                        </p>

                        <div className="mt-4">

                          <a href="#projects" className="btn btn-info me-2">View Projects</a>

                            <a href={resume} download className="btn btn-outline-info">Resume</a>

                        </div>

                        <div className="social-icons mt-5">

                            <a href="https://github.com/lokee05112006-netizen"><FaGithub /></a>

                            <a href="https://www.linkedin.com/in/lokesh0777?utm_source=share_via&utm_content=profile&utm_medium=member_android"><FaLinkedin /></a>

                            <a href="https://www.instagram.com/kutty__lokee__appu?igsh=MXVxMmY5MXo2aHN6"><FaInstagram /></a>

                        </div>

                    </div>

                    <div className="col-lg-6 text-center">

                        <div className="image-box">

                            <motion.img
                                src={profile}
                                className="profile-img"
                                animate={{
                                    y: [0, -15, 0]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3
                                }}
                            />

                            <div className="floating html">
                                <FaHtml5 />
                            </div>

                            <div className="floating css">
                                <FaCss3Alt />
                            </div>

                            <div className="floating js">
                                <FaJs />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;