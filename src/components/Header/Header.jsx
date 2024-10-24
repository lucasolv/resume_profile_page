import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import profileImage from '../../images/profileImage.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div>
            <div className="mini-profile">
                {/* <img src={profileImage} alt="profile image" /> */}
                <div className="infos-profile-header">                   
                    <h4>Lucas Oliveira Ferreira</h4>
                    <p>Brasília (DF)</p>
                </div>
            </div>
            <Navbar />
        </div>
    </div>
  )
}

export default Header