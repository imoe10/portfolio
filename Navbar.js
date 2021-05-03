import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';




function Navbar() {
    const onClick = () => {
        window.location.href="https://gmail.com";
    };
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <i className="fas fa-terminal"></i> RashwanJr
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                         <i className="fas fa-envelope"></i> 
                         <div className="myemail">morashwan8@gmail.com</div> 
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/work" className="nav-links" onClick={closeMobileMenu}>
                            Work
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Email me
                        </Link>
                    </li>
                </ul>
                {button &&  <Button onClick={onClick} type="button" className='btn' buttonStyle='btn--outline' 
                buttonSize='btn--medium'>
                    Email me
                </Button>}
              </div>
          </nav>
        </>
    )
}

export default Navbar
