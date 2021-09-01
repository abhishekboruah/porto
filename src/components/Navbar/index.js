import React, {useState, useEffect, useRef} from 'react';
import { NavbarContainer, NavLogo, Nav, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink,NavResume } from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';
import { gsap, Power3 } from 'gsap';
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav= () =>{
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else{
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
    let btn = useRef(null);

    useEffect(() => {
        gsap.to(
            btn,
            3,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )
    }, []);

    const toggleHome = () =>{
        scroll.scrollToTop();
    };
    return (
        <>
        <IconContext.Provider value ={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>logosss</NavLogo>
                <MobileIcon onClick= {toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration= {500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavResume to='/resume'>Resume</NavResume>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='blog'>Blog</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin' ref= {el => {btn = el}}>dm</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
