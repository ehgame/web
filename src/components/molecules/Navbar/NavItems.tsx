import React from 'react'
import { navLinks } from '../../../constants/index';
import './styles.css'

const NavItems = () => {
    return (
        <div className='nav-items'>
            <ol className="list-container">
                {navLinks && navLinks.map(({ name, url }, index) => (
                    <li key={index} className="list-items">
                        <a href={url}>  <div style={{ color: '#fff' }}>
                            <div className='item'>{name}</div>
                        </div>
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default NavItems