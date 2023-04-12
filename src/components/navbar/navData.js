import React from "react";
import * as FaIcon from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const navData = [
     {
          id : 1,
          text : 'Home',
          path : '/',
          icon : <AiIcon.AiFillHome />,
          className: 'nav-item',
          linkcss : 'nav-link'
     },
     {
          id : 2,
          text : 'Reservation',
          path : '/reservation',
          icon : <AiIcon.AiOutlineFileText />,
          className: 'nav-item',
          linkcss : 'nav-link'
     },
     {
          id : 3,
          text : 'Add house',
          path : '/addHouse',
          icon : <AiIcon.AiFillHome />,
          className: 'nav-item',
          linkcss : 'nav-link'
     },
     {
          id : 4,
          text : 'Delete House',
          path : '/deleteHouse',
          icon : <AiIcon.AiFillHome />,
          className: 'nav-item',
          linkcss : 'nav-link'
     },
     {
          id : 5,
          text : 'SignOut',
          path : '/signout',
          icon : <AiIcon.AiFillHome />,
          className: 'nav-item',
          linkcss : 'nav-link'
     },
]
