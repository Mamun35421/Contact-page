import React, { useState } from 'react';
import './Navbar.css';
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [menueOpen, setMenueOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
        if (menueOpen) {
            setMenueOpen(prev => !prev)
        }
    }
    const menueToggle = () => {
        setMenueOpen(prev => !prev)
    }
    const handleSearch = () => {
        document.getElementById('search').focus();
    };
    const handleNotificationPannel = () => {
        setNotificationOpen(prev => !prev)
  
    }
    return (
        <div>
            <div className='nav-bar'>
                <div>
                    <h3>BRAND NAME</h3>
                </div>
                <div className='nav-menu'>
                    <a className='menu-item' href="/"><p>HOME</p></a>
                    <a className='menu-item' href="/"><p>SHOP</p></a>
                    <div className='menu-item' class="dropdown">
                        <button class="dropbtn"><span>CATEGORIES</span>
                            <FiChevronDown />
                        </button>
                        <div class="dropdown-content">
                            <a href="/">Mobile</a>
                            <a href="/">Accessories</a>
                            <a href="/">Dress for Man</a>
                            <a href="/">Dress for Ladies</a>
                            <a href="/">Babies & Toys</a>
                            <a href="/">Health & Beauty</a>
                        </div>
                    </div>
                    <a className='menu-item' href="/"><p>CONTACT</p></a>
                </div>
                <div className='nav-icon'>
                    <div className='nav-action-logo'>
                        <AiOutlineSearch onClick={handleSearch} className='search-icon' />
                        <input id="search" type="search" />
                        <BsFillPersonFill className='profile-icon' />
                        <AiOutlineBell onClick={handleNotificationPannel} className='notification-icon' />
                        <div className={notificationOpen ? 'notification-area' : 'notification-area-none'}>
                            <p>Lorem Ipsum is simply text of the printing and typesetting</p>
                            <hr />
                            <p>Lorem Ipsum is simply text of the printing and typesetting</p>
                            <hr />
            
                            <a href="/">See more</a>
                        </div>
                    </div>
                    <div className='hamburger-menu'>
                        {navbarOpen ? <GrClose onClick={handleToggle} /> : <GiHamburgerMenu onClick={handleToggle} />}
                    </div>
                </div>
            </div>
            <div className={navbarOpen ? 'nav-menu-mobile' : 'nav-inactive'}>
                <a href="/"><p>HOME</p></a>
                <hr className='nav-underline' />
                <a href="/"><p>SHOP</p></a>
                <hr className='nav-underline' />
                <div class="dropdown">
                    <button onClick={menueToggle} class="dropbtn"><span>CATEGORIES</span>
                        <FiChevronDown />
                    </button>
                    <div class={menueOpen ? 'dropdown-content' : 'dropdown-content-none'}>
                        <a href="/">Mobile</a>
                        <a href="/">Accessories</a>
                        <a href="/">Dress for Man</a>
                        <a href="/">Dress for Ladies</a>
                        <a href="/">Babies & Toys</a>
                        <a href="/">Health & Beauty</a>
                    </div>
                </div>
                <hr className='nav-underline' />
                <a href="/"><p>CONTACT</p></a>
            </div>
        </div>
    );
};

export default Navbar;