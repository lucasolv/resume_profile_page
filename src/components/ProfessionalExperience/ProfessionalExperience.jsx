import './ProfessionalExperience.css'
import React from 'react'

const ProfessionalExperience = () => {
  return (
    <div className='professional-experience section-info'>
        <h2>Experiência profissional</h2>
        <div className="experiences-container">
            <div className="experience-infos">
                <h3>Estagiário</h3>
                <div className="experience-details">
                    <h5 className='details'>IESB / CESB</h5>
                    <h5 className='details'>Abril de 2023 – Abril de 2025</h5>
                    <p>Desenvolvedor: Construção de plataforma voltada ao apoio de alunos, utilizando inteligência artificial generativa via API da OpenAI, criando frontend e backend do zero com React.js e Node.js, e conectando o backend a um banco de dados MySQL com gerenciamento e visualização dos dados com Workbench. Atuei também como ponte entre o time de desenvolvimento e a equipe de requisitos.</p>
                </div>
            </div>
            <div className="experience-infos">
                <h3>Freelancer</h3>
                <div className="experience-details">
                    <h5 className='details'>Motora / ClikMob</h5>
                    <h5 className='details'>Abril de 2024 – Agosto de 2024</h5>
                    <p>Desenvolvedor: Participação na construção de backend com Node.js com integração a um banco de dados MySQL e gerenciamento dos dados com Beekeeper Studio.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfessionalExperience