import React from 'react';
import * as AiIcon from 'react-icons/ai';
import * as GiIcon from 'react-icons/gi';
import * as MdIcon from 'react-icons/md';
import * as BiIcon from 'react-icons/bi';

/* eslint-disable */
export const unAuthenticate = [
  {
    id: 1,
    text: 'Splash',
    path: '/splash',
    icon: <BiIcon.BiUserCircle />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 2,
    text: 'Signup',
    path: '/signup',
    icon: <BiIcon.BiUserCircle />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 3,
    text: 'Login',
    path: '/login',
    icon: <BiIcon.BiUserCircle />,
    className: 'nav-item',
  },

]

export const navData = [
  {
    id: 1,
    text: 'Home',
    path: '/home',
    icon: <AiIcon.AiFillHome />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 2,
    text: 'Reserve Form',
    path: '/reserveform',
    icon: <AiIcon.AiOutlineFileText />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 3,
    text: 'Reservation',
    path: '/reservation',
    icon: <AiIcon.AiOutlineFileText />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 4,
    text: 'Add house',
    path: '/addHouse',
    icon: <GiIcon.GiSpookyHouse />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 5,
    text: 'Delete House',
    path: '/deleteHouse',
    icon: <MdIcon.MdDelete />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 6,
    text: 'SignOut',
    path: '/signout',
    icon: <BiIcon.BiUserCircle />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },

];
