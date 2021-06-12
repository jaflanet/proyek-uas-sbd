import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElement';
import logo_web from '../../assets/NavbarAsset/logo_web_white.png'
import logo_Valo from '../../assets/NavbarAsset/valo_logo_white.png'
import logo_PUBG from '../../assets/NavbarAsset/pubg_logo_white.png'
import logo_ML from '../../assets/NavbarAsset/ml_logo_white.png'
import "./index.css"
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// const handleClick = () => {
//   history.push(`/${setData}`);
// }

const Navbar = () => {
  const { setData } = useParams()
  console.log(setData)
  return (
    <>
      <Nav>
        <NavLink to={`/${setData}`} >
        <img src={logo_web} alt='logo' className='logo-web'/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavBtnLink to='/HomeValoPages'>
          <img src={logo_Valo} alt='Valo' />
          </NavBtnLink>
          <NavBtnLink to='/HomePUBGPages'>
          <img src={logo_PUBG} alt='PUBG' />
          </NavBtnLink>
          <NavBtnLink to={`HomeMLPages/${setData}`}>
          <img src={logo_ML} alt='ML' />
          </NavBtnLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/ProfilePages'>profil</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
