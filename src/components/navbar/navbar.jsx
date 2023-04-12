import React, {useState} from 'react';
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import { Link } from 'react-router-dom';
import { navData } from './navData';
import './navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar,SetSidebar] = useState(false);

  const showSideBar = () => SetSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{ color : '#000'}}>
    <div className="navbar">
     <Link to ='#' className='nav-toggle'>
       <FaIcon.FaBars onClick={showSideBar}/>
     </Link>
    </div>
    <nav className={sidebar ? 'nav-container active' : 'nav-container'}>
      <ul className="nav-menu" onClick={showSideBar}>
        <li className="nav-item">
          <Link to='#' className='close-bar'>
            <AiIcon.AiOutlineClose />
          </Link>
        </li>
        {
          navData.map(item => {
            return (
              <li className={item.className} key={item.id}>
              <Link to={item.path} className={item.linkcss}>
                {item.icon}
                <span>{item.text}</span>
              </Link>
            </li>
            )
          })
        }
      </ul>

    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;