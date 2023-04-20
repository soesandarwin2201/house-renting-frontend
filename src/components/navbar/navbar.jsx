/* eslint-disable */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as FaIcon from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { navData , unAuthenticate} from './navData';
import * as BiIcon from 'react-icons/bi';
import './navbar.css';

const Navbar = () => {
  const status = useSelector((state) => state.signup.token);
  const success = useSelector((state) => state.login.token)
  const [sidebar, SetSidebar] = useState(false);
  const showSideBar = () => SetSidebar(!sidebar);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <>
    {
      status || success ? (<IconContext.Provider value={{ color: '#000' }}>
      <div className="navbar">
        <Link to="#" className="nav-toggle">
          <FaIcon.FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-container active' : 'nav-container'}>
        <ul className="nav-menu" onClick={showSideBar}>
          <li className="nav-item logo-container">
            <Link to="/" className="logo">
              <span className="logo-name-1">House Renting</span>
            </Link>
            <Link to="#" className="close-bar">
              <AiIcon.AiOutlineClose />
            </Link>
          </li>
          <div className="menu">
            {
        navData.map((item) => (
          <li className={item.className} key={item.id}>
            <Link to={item.path} className={item.linkcss}>
              {item.icon}
              <span>{item.text}</span>
            </Link>
          </li>
        ))
      }
        <li className='signout-container nav-item'>
          <button on onClick={() => logout()} id="navbar-sub-btn">
            <BiIcon.BiUserCircle />
            <span>SignOut</span>
          </button>
        </li>
          </div>

          <div className="social-container">
            <li className="nav-item">
              <Link to="https://wellfound.com/u/soe-sandar-win" className="social link">
                <FaIcon.FaAngellist />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://www.linkedin.com/in/soe-sandar-win-softwareengineer/" className="social link">
                <FaIcon.FaLinkedin />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://github.com/soesandarwin2201" className="social link">
                <FaIcon.FaGithub />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://medium.com/@soesandarwin2201" className="social link">
                <FaIcon.FaMedium />
              </Link>
            </li>
          </div>
        </ul>

      </nav>
    </IconContext.Provider>) : (
      <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <Link to="#" className="nav-toggle">
          <FaIcon.FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-container active' : 'nav-container'}>
        <ul className="nav-menu" onClick={showSideBar}>
          <li className="nav-item logo-container">
            <Link to="/" className="logo">
              <span className="logo-name-1">House Renting</span>
            </Link>
            <Link to="#" className="close-bar">
              <AiIcon.AiOutlineClose />
            </Link>
          </li>
          <div className="menu">
            {
        unAuthenticate.map((item) => (
          <li className={item.className} key={item.id}>
            <Link to={item.path} className={item.linkcss}>
              {item.icon}
              <span>{item.text}</span>
            </Link>
          </li>
        ))
        
      }
       
          </div>
          
          <div className="social-container">
            <li className="nav-item">
              <Link to="https://wellfound.com/u/soe-sandar-win" className="social link">
                <FaIcon.FaAngellist />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://www.linkedin.com/in/soe-sandar-win-softwareengineer/" className="social link">
                <FaIcon.FaLinkedin />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://github.com/soesandarwin2201" className="social link">
                <FaIcon.FaGithub />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://medium.com/@soesandarwin2201" className="social link">
                <FaIcon.FaMedium />
              </Link>
            </li>
          </div>
        </ul>

      </nav>
    </IconContext.Provider>
    )
    }
    </>
  );
}

export default Navbar;