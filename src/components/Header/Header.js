import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg'


const Header = () => {
    return (
        
       <nav className='header'>
        <img src={logo} alt="" />
        <div className='header-info'>
            <h3>Fitness Club</h3>
        </div>
        </nav>
    );
};

export default Header;