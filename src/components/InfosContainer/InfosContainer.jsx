import React from 'react'
import './InfosContainer.css'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import Skills from '../Skills/Skills'
import Competencies from '../Competencies/Competencies'
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience'
import ComplementaryCourses from '../ComplementaryCourses/ComplementaryCourses'
import AcademicBackground from '../AcademicBackground/AcademicBackground'

const InfosContainer = () => {
  return (
    <div className='infos-container'>
      <ProfileInfo />
      <div className="academic-background-tablet">
        <AcademicBackground />
      </div>
      <ProfessionalExperience />
      <ComplementaryCourses />
      
      {/* <p>principais projetos</p> */}
    </div>
  )
}

export default InfosContainer