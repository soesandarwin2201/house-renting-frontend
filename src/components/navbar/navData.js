import React from 'react';
import * as AiIcon from 'react-icons/ai';
import * as GiIcon from 'react-icons/gi';
import * as MdIcon from 'react-icons/md';
import * as BiIcon from 'react-icons/bi';

/* eslint-disable */
export const navData = [
  {
    id: 1,
    text: 'Home',
    path: '/',
    icon: <AiIcon.AiFillHome />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 2,
    text: 'Reservation',
    path: '/reservation',
    icon: <AiIcon.AiOutlineFileText />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 3,
    text: 'Add house',
    path: '/addHouse',
    icon: <GiIcon.GiSpookyHouse />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 4,
    text: 'Delete House',
    path: '/deleteHouse',
    icon: <MdIcon.MdDelete />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
  {
    id: 5,
    text: 'SignOut',
    path: '/signout',
    icon: <BiIcon.BiUserCircle />,
    className: 'nav-item',
    linkcss: 'nav-link',
  },
];