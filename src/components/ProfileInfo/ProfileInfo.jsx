import './ProfileInfo.css'
import React from 'react'
import profileImage from '../../images/profileImage.jpg'
import AcademicBackground from '../AcademicBackground/AcademicBackground'
import Competencies from '../Competencies/Competencies'

const ProfileInfo = () => {
  return (
    <div className='profile-info section-info'>
      <div className='photo-mobile'>
        <img src={profileImage} alt="Profile photo"/>
        <h4>Lucas Oliveira Ferreira</h4>
        <p>Brasília (DF)</p>
      </div>
      <div className="profile-info-container">
        <div className="profile-info-text section-info">
          <h2>Perfil</h2>
          <p>Programador com 2 anos de experiência buscando oportunidade como desenvolvedor web. Estudante no curso de ciência da computação do IESB.</p>
        </div>
        <div className="skills-competencies-tablet-pc">
        <Competencies />
        {/* <Skills /> */}
      </div>
        <div  className="academic-background-pc-celular">
          <AcademicBackground />
        </div>
      </div>
      <img src={profileImage} alt="Profile photo" className='photo-pc' />
    </div>
  )
}

export default ProfileInfo