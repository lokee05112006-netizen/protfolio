import "../css/contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="container">

        <div className="contact-container">

          <div className="contact-header">

            <span>CONTACT</span>

            <h2>Let's Create Something Amazing Together 🚀</h2>

            <p>
              Whether you have a project idea, internship opportunity,
              or just want to connect, I'd love to hear from you.
            </p>

          </div>

          <div className="row g-4">

            {/* Left Side */}

            <div className="col-lg-5">

              <div className="contact-info">

                <div className="info-card">

                  <FaEnvelope className="icon" />

                  <div>
                    <h5>Email</h5>
                    <p>lokee05112006@example.com</p>
                  </div>

                </div>

                <div className="info-card">

                  <FaPhoneAlt className="icon" />

                  <div>
                    <h5>Phone</h5>
                    <p>+91 73392 44258</p>
                  </div>

                </div>

                <div className="info-card">

                  <FaMapMarkerAlt className="icon" />

                  <div>
                    <h5>Location</h5>
                    <p>Tamil Nadu, India</p>
                  </div>

                </div>

                <div className="social-box">

                  <a href="https://github.com/lokee05112006-netizen"><FaGithub /></a>

                  <a href="https://www.linkedin.com/in/lokesh0777?utm_source=share_via&utm_content=profile&utm_medium=member_android"><FaLinkedin /></a>

                  <a href="https://www.instagram.com/kutty__lokee__appu?igsh=MXVxMmY5MXo2aHN6"><FaInstagram /></a>

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="col-lg-7">

              <div className="contact-form">

                <div className="row">

                  <div className="col-md-6">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />

                  </div>

                  <div className="col-md-6">

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />

                  </div>

                </div>

                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="Subject"
                />

                <textarea
                  rows="6"
                  className="form-control mt-3"
                  placeholder="Write your message..."
                ></textarea>

                <button className="send-btn mt-4">

                  <FaPaperPlane />

                  Send Message

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;