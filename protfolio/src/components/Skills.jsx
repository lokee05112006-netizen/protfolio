import "../css/skills.css";

const skills = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "Bootstrap", value: 90 },
  { name: "JavaScript", value: 85 },
  { name: "React", value: 90 },
  { name: "Python", value: 90 },
];

function Skills() {
  return (
    <section id="skills" className="skills py-5">
      <div className="container">

        <h2 className="text-center mb-5">My Skills</h2>

        <div className="row">

          {skills.map((skill, index) => (

            <div className="col-lg-6 mb-4" key={index}>

              <div className="d-flex justify-content-between">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>

              <div className="progress">

                <div
                  className="progress-bar bg-info"
                  style={{ width: `${skill.value}%` }}
                >
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;