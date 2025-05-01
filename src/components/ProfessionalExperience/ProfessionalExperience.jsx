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
                    <p>Desenvolvedor: Criação de plataforma para auxílio de alunos com Inteligência artificial generativa, utilizando API da OpenAI, ReactJS e NodeJS.</p>
                </div>
            </div>
            <div className="experience-infos">
                <h3>Freelancer</h3>
                <div className="experience-details">
                    <h5 className='details'>Motora / ClikMob</h5>
                    <h5 className='details'>Abril de 2024 – Agosto de 2024</h5>
                    <p>Desenvolvedor: Construção de back-end com NodeJS e front-end com ReactJS.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfessionalExperience