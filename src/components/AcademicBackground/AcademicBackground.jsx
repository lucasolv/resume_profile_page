import './AcademicBackground.css'
import React from 'react'

const AcademicBackground = () => {
  return (
    <div className='academic-background'>
        <h2>Formação acadêmica</h2>
        <div className="instituitions-container">
        <div className="instituition-info">
            <h4>Graduação em Ciência da computação</h4>
            <p>Centro Universitário IESB</p>
            <p>Agosto de 2021 - Junho de 2026</p>
        </div>
        <div className="instituition-info">
            <h4>Ensino Médio</h4>
            <p>Colégio Adventista da Asa Sul</p>
            <p>Janeiro de 2018 - Dezembro de 2020</p>
        </div>
        </div>
    </div>
  )
}

export default AcademicBackground