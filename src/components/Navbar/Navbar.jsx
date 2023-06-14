import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle scroll event
    const handleScroll = () => {
        if (window.pageYOffset > 250) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    return (
        <div>
        <div className={isSticky ? 'navbar sticky' : 'navbar'} >
            <div className="container">
                <div className="header">
                    <div >
                        <ul>
                            <li className="logo">
                                <img src={Logo} alt="ximsa-logo" />
                            </li>
                            <li>Demos</li>
                            <li>Elements</li>
                            <li>Features</li>
                            <li>Support</li>
                            <li>Decumentations</li>
                            <li className="Purchase_btn">Purchase Now <i className="fa-solid fa-arrow-right"></i></li>
                            <li><i class="fa-sharp fa-solid fa-bars"></i></li>
                        </ul>
                    </div>
                    

                </div>
            </div>
        </div>
        <div className="main" data-aos="fade-up">
                        <span>Many Website, One Solution</span>
                        <br />
                        <h1> 2.4</h1>
                        <br />
                        <h2>Multipurpose <br />
                            <h3>WordPress Theme</h3>
                        </h2>
                        <div className="Btns">
                            <a href='/'>Stunning Demos</a>
                            <a href='/'>Theme Features</a>
                        </div>
                    </div>
        </div>
    )
}

export default Navbar;
