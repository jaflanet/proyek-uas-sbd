import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElement';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <input type="image" src="../../assets/NavbarAsset/logo_web_white.png" alt="submit" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavBtnLink to='/' activeStyle>
          <input type="image" src="../../assets/NavbarAsset/logo_web_white.png" alt="submit" />
          </NavBtnLink>
          <NavBtnLink to='/' activeStyle>
          <input type="image" src="../../assets/NavbarAsset/logo_web_white.png" alt="submit" />
          </NavBtnLink>
          <NavBtnLink to='/' activeStyle>
          <input type="image" src="../../assets/NavbarAsset/logo_web_white.png" alt="submit" />
          </NavBtnLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
