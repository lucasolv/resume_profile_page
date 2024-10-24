import './ProfileInfo.css'
import React from 'react'
import profileImage from '../../images/profileImage.jpg'
import AcademicBackground from '../AcademicBackground/AcademicBackground'

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
          <h2>Perfil profissional</h2>
          <p>Desenvolvedor apaixonado por tecnologia e aprendizado contínuo, com foco em Node.js e desenvolvimento web. Estudante no curso de ciência da computação do IESB, busco uma oportunidade de estágio para aplicar e expandir minhas habilidades em desenvolvimento e contribuir com projetos desafiadores.</p>
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