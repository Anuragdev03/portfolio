import { useState } from 'react'
import './App.css'
import linkendin from "./assets/linkedin.png";
import github from "./assets/github.png";

type Options = "1" | "2" | "3";
type Experience = 1 | 2

function App() {
  const title = "<Software Engineer />"
  const [option, setOption] = useState<Options>("1")
  const [selectedExp, setSelectedExp] = useState<Experience>(1)

  const About = () => {
    return (
      <p>
        As an experienced software engineer with <span className='highlight'>3 years</span> of industry experience, I have developed a diverse
        skillset spanning <span className="highlight">web</span> and <span className="highlight">mobile app</span> development. My technical proficiency centers around the <span className="highlight">React ecosystem, </span>
        including React.js for web development and React Native for cross-platform mobile apps. I am also adept in <span className="highlight">server-side technologies like Node.js, Express, </span> and TypeScript, allowing me to build robust, full-stack applications. <br />
        Throughout my career, I have put these skills to use, collaborating with teams to architect and implement a wide range of digital products. From <span className="highlight">feature-rich web applications to highly-performant mobile experiences,</span>  I have tackled complex challenges with a focus on clean, maintainable code and intuitive user experiences. <br />
        In addition to my expertise in popular JavaScript frameworks and libraries, I am continuously expanding my horizons. I am currently deepening my knowledge of <span className="highlight">Go</span>  and <span className="highlight">python</span>, two rapidly growing languages that offer unique strengths in areas like systems programming and data analysis. This ongoing commitment to learning allows me to stay ahead of industry trends and bring the most relevant, cutting-edge solutions to my work. <br />
        Beyond technical proficiency, I pride myself on my ability to communicate effectively with both technical and non-technical stakeholders. My <span className="highlight">adaptability, attention to detail,</span>  and <span className="highlight">strong work ethic</span>  make me a valuable asset to any development team.
      </p>
    )
  }

  function handleOptions(id: Options) {
    setOption(id)
  }

  const Skills = () => {
    return (
      <div style={{ marginTop: "10px" }}>
        <h3 className='title'>Front-end:</h3>
        <p>HTML, CSS, JS, React, React Native</p>

        <h3 className='title'>Back-end:</h3>
        <p>Node Js, Express, PostgreSQL, Sequelize ORM, Go, Python</p>

        <h3 className='title'>Testing library:</h3>
        <p>Jest, Enzyme, Cucumber, React testing library</p>

        <h3 className='title'>Version Control:</h3>
        <p>Git</p>
      </div>
    )
  }

  function handleExperience(id: Experience) {
    setSelectedExp(id)
  }

  const Experience = () => {
    return (
      <div style={{ marginTop: "10px" }}>
        <section className='exp-grid'>
          <div>
            <span onClick={() => handleExperience(1)} className='exp-year' style={{ opacity: selectedExp === 1 ? 1 : 0.7, fontWeight: selectedExp === 1 ? "bold" : "normal" }}>2022 - Present</span> <p />
            <span onClick={() => handleExperience(2)} className='exp-year' style={{ opacity: selectedExp === 2 ? 1 : 0.7, fontWeight: selectedExp === 2 ? "bold" : "normal" }}>2021 - 2022</span>
          </div>
          {selectedExp === 1 ? <div>
            <span className='exp-job'>Associate Software Engineer</span> <p />
            <ul style={{ padding: 10 }}>
              <li>
                Engineered reusable React components, reducing development time by 30% and
                improving overall code maintainability.
              </li>
              <li>
                Developed a robust e-commerce web application using React.js, implementing
                comprehensive unit testing with Jest and Enzyme, resulting decrease in post-release
                bugs. [<a href='https://www.lochimarket.com' target='_blank'>https://www.lochimarket.com/]</a>
              </li>
              <li>
                Implemented responsive designs using modern CSS techniques, ensuring seamless
                user experience across all devices.
              </li>
              <li>
                Developed a robust and scalable web and mobile application for managing e-journal
                content. <a href="https://jgatenext.com" target='_blank'>[jgatenext.com]</a>
              </li>
              <li>
                Developed a ios mobile app using React Native for users to connect with others based
                on their location.
              </li>
            </ul>
          </div> : selectedExp === 2 ?
            <div>
              <span className='exp-job'>Full Stack Engineer</span> <p />
              <ul style={{ padding: 10 }}>
                <li>
                  Contributed to the development of server-side APIs and user interfaces for partner
                  relationship management product <a href="https://torchlite.com" target='_blank'>[torchlite.com]</a>
                </li>
                <li>
                  Played a key role in developing an e-commerce website and companion mobile app.
                </li>
                <li>
                  Built and maintained RESTful APIs using Node.js and Express, facilitating seamless
                  communication between frontend and backend systems
                </li>
              </ul>
            </div> : null}
        </section>
      </div>
    )
  }

  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='sections'>
            <div className='left-section'>
              <section className='section-1'>
                <h1 className='name'>
                  ANURAG D
                </h1>
                <h2 className='title'>{title}</h2>

                <p className='desc'>
                  Passionate about crafting elegant and efficient <span className='highlight'>web</span> and <span className='highlight'>mobile</span> applications.
                </p>
              </section>

              <section className='section-2'>
                <div className='link-container'>
                  <div className="line" style={{ width: option === "1" ? "50px" : "30px" }} />
                  <a href='#' onClick={() => handleOptions("1")} className='link' tabIndex={0}>ABOUT</a>
                </div>
                <p />
                <div className='link-container'>
                  <div className="line" style={{ width: option === "2" ? "50px" : "30px" }} />
                  <a href='#' onClick={() => handleOptions("2")} className='link' tabIndex={0}>SKILLS</a>
                </div>
                <p />
                <div className='link-container'>
                  <div className="line" style={{ width: option === "3" ? "50px" : "30px" }} />
                  <a href='#' onClick={() => handleOptions("3")} className='link' tabIndex={0}>EXPERIENCE</a>
                </div>
              </section>

              <section className='section-3'>
                <a href="https://www.linkedin.com/in/anurag-dev" target='_blank' aria-label='open linkedin profile' style={{width: "35px", height: "35px"}}>
                  <img src={linkendin} className='icon' alt='linkedin profile' />
                </a>
                <a href='https://github.com/Anuragdev03' target='_blank' aria-label='open github profile'>
                  <img src={github} className='icon' alt='github profile' />
                </a>
              </section>
            </div>
            <div className='right-section'>
              <section className='hide-on-desktop'>
                <span onClick={() => handleOptions("1")} style={{fontWeight: option === "1" ? "bold" : "normal"}}>About </span>|
                <span onClick={() => handleOptions("2")} style={{fontWeight: option === "2" ? "bold" : "normal"}}> Skills </span>|
                <span onClick={() => handleOptions("3")} style={{fontWeight: option === "3" ? "bold" : "normal"}}>Experience</span>
              </section>
              {option === "1" ? <About /> : null}
              {option === "2" ? <Skills /> : null}
              {option === "3" ? <Experience /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
