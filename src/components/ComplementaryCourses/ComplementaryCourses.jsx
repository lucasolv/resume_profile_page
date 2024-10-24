import "./ComplementaryCourses.css";
import React from 'react'

const ComplementaryCourses = () => {

    const handleCourseClick = (courseLink) => {
        window.open(courseLink, "_blank");
      };

  return (
    <div className="complementary-courses section-info">
        <h2>Cursos complementares</h2>
        <div className="courses-container">
            <div className="courses-infos" onClick={()=>{handleCourseClick("https://www.udemy.com/share/105kGg3@wsJ6Fei81e37KhbKKEZGdV0EwkwfrOk8lCqY8wId3F-ZoJGBMGthcsAg9XtAJte9uw==/")}}>
                <h3>Node.js do Zero a Maestria com diversos Projetos</h3>
                <p>Udemy – 38 horas</p>
            </div>
            <div className="courses-infos" onClick={()=>{handleCourseClick("https://www.udemy.com/share/106eYc3@EBcQajFNB5U99SoeSsS_zEUBU9fb4_shLD7CJRensP0FG637z3yLMYbr6NW-hvJl3w==/")}}>
                <h3>React do Zero a Maestria (c/ hooks, router, API, Projetos)</h3>
                <p>Udemy – 30.5 horas</p>
            </div>
            <div className="courses-infos" onClick={()=>{handleCourseClick("https://portalhashtag.com/cursos/1691341626466x837882311539026800")}}>
                <h3>JavaScript Impressionador</h3>
                <p>Hashtag Treinamentos – 136 horas</p>
            </div>
        </div>
    </div>
  )
}

export default ComplementaryCourses