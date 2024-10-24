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
                    <h5 className='details'>IESB</h5>
                    <h5 className='details'>Abril de 2023 – Presente</h5>
                    <p>Desenvolvedor: Criação de ferramenta de Inteligência artificial generativa para auxílio de alunos utilizando API da OpenAI, Python e NextJS.</p>
                </div>
            </div>
            <div className="experience-infos">
                <h3>Freelancer</h3>
                <div className="experience-details">
                    <h5 className='details'>Motora / ClikMob</h5>
                    <h5 className='details'>Abril de 2024 – Agosto de 24</h5>
                    <p>Desenvolvedor: Construção de back-end com NodeJS e front-end com ReactJS.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfessionalExperience