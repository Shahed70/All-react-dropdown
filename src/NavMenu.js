// this all menu have dropdown

// import React, { useState } from 'react';
// //import './NavMenu.css'; // Import the CSS file for styling

// const menuItemsData = [
//   {
//     label: 'Home',
//     submenus: ['Submenu 1', 'Submenu 2', 'Submenu 3'],
//     isOpen: false,
//   },
//   {
//     label: 'About',
//     submenus: ['Submenu 1', 'Submenu 2', 'Submenu 3'],
//     isOpen: false,
//   },
//   {
//     label: 'Contact',
//     submenus: ['Submenu 1', 'Submenu 2', 'Submenu 3'],
//     isOpen: false,
//   },
// ];

// const NavMenu = () => {
//   const [menuItems, setMenuItems] = useState(menuItemsData);

//   const toggleMenu = (index) => {
//     const updatedMenuItems = menuItems.map((menuItem, i) => ({
//       ...menuItem,
//       isOpen: i === index ? !menuItem.isOpen : false,
//     }));
//     setMenuItems(updatedMenuItems);
//   };

//   return (
//     <nav>
//       <ul className="menu">
//         {menuItems.map((menuItem, index) => (
//           <li key={index}>
//             <div className="menu-item">
//               <a href="#">{menuItem.label}</a>
//               <button className="toggle-btn" onClick={() => toggleMenu(index)}>
//                 {menuItem.isOpen ? '-' : '+'}
//               </button>
//             </div>
//             {menuItem.isOpen && (
//               <ul className="dropdown">
//                 {menuItem.submenus.map((submenu, subIndex) => (
//                   <li key={subIndex}>{submenu}</li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavMenu;

// this all menu have dropdown

// this only two menu have dropdown

// import React, { useState } from 'react';
// //import './NavMenu.css'; // Import the CSS file for styling

// const menuItemsData = [
//   {
//     label: 'Home',
//     isOpen: false,
//   },
//   {
//     label: 'About',
//     submenus: ['Submenu 1', 'Submenu 2', 'Submenu 3'],
//     isOpen: false,
//   },
//   {
//     label: 'Contact',
//     isOpen: false,
//   },

//   {
//     label: 'About2',
//     submenus: ['Submenu 1', 'Submenu 2', 'Submenu 3'],
//     isOpen: false,
//   },
// ];

// const NavMenu = () => {
//   const [menuItems, setMenuItems] = useState(menuItemsData);

//   const toggleMenu = (index) => {
//     const updatedMenuItems = menuItems.map((menuItem, i) => ({
//       ...menuItem,
//       isOpen: i === index ? !menuItem.isOpen : false,
//     }));
//     setMenuItems(updatedMenuItems);
//   };

//   return (
//     <nav>
//       <ul className="menu">
//         {menuItems.map((menuItem, index) => (
//           <li key={index}>
//             <div className="menu-item">
//               <a href="#">{menuItem.label}
//               {menuItem.submenus && (
//                 <button className="toggle-btn" onClick={() => toggleMenu(index)}>
//                   {menuItem.isOpen ? '-' : '+'}
//                 </button>
//               )}</a>
//             </div>
//             {menuItem.isOpen && menuItem.submenus && (
//               <ul className="dropdown">
//                 {menuItem.submenus.map((submenu, subIndex) => (
//                   <li key={subIndex}>{submenu}</li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavMenu;

// this only two menu have dropdown

// this dropdown doesnot have extra button next to it

// import React, { useState } from 'react';
// //import './NavMenu.css'; // Import the CSS file for styling

// const menuItemsData = [
//   {
//     label: 'Home',
//     isOpen: false,
//   },
//   {
//     label: 'About',
//     submenus: ['Submenu 1', 'Submenu 2', 'Submenu 3'],
//     isOpen: false,
//   },
//   {
//     label: 'Contact',
//     isOpen: false,
//   },

//   {
//     label: 'About2',
//     submenus: ['Submenu 1', 'Submenu 2', 'Submenu 3'],
//     isOpen: false,
//   },
// ];

// const NavMenu = () => {
//   const [menuItems, setMenuItems] = useState(menuItemsData);

//   const toggleMenu = (index) => {

//     console.log(index)

//     const updatedMenuItems = menuItems.map((menuItem, i) => ({

//       ...menuItem,
//       isOpen: i === index ? !menuItem.isOpen : false,

//     }));
//     setMenuItems(updatedMenuItems);
//   };

//   return (
//     <nav>
//       <ul className="menu">
//         {menuItems.map((menuItem, index) => (
//           <li key={index}>
//             <div className="menu-item">
//               <a href="#" onClick={() => toggleMenu(index)}>{menuItem.label} </a>
//               {/* {menuItem.submenus && (
//                 <button className="toggle-btn" onClick={() => toggleMenu(index)}>
//                   {menuItem.isOpen ? '-' : '+'}
//                 </button>
//               )} */}
//             </div>
//             {menuItem.isOpen && menuItem.submenus && (
//               <ul className="dropdown">
//                 {menuItem.submenus.map((submenu, subIndex) => (
//                   <li  key={subIndex}>{submenu}</li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavMenu;

// this dropdown doesnot have extra button next to it

// This submenu disappear When clik on submenu too

import React, { useState } from 'react';
//import './NavMenu.css'; // Import the CSS file for styling

const menuItemsData = [
  {
    label: 'Home',
    to: '/',
    isOpen: false,
  },
  {
    label: 'About',
    to: '/about',
    submenus: [
      {
        label: 'Link 1',
        to: '/link1',
      },
      {
        label: 'Link 2',
        to: '/link2',
      },
      {
        label: 'Link 3',
        to: '/link3',
      },
    ],
    isOpen: false,
  },
  {
    label: 'Contact',
    to: '/contact',
    isOpen: false,
  },

  {
    label: 'About2',
    to: '/about2',
    submenus: [
      {
        label: 'Link 1',
        to: '/link1',
      },
      {
        label: 'Link 2',
        to: '/link2',
      },
      {
        label: 'Link 3',
        to: '/link3',
      },
    ],
    isOpen: false,
  },
];

const NavMenu = () => {
  const [menuItems, setMenuItems] = useState(menuItemsData);

  const toggleMenu = (index) => {
    const updatedMenuItems = menuItems.map((menuItem, i) => ({
      ...menuItem,
      isOpen: i === index ? !menuItem.isOpen : false,
    }));
    setMenuItems(updatedMenuItems);
  };

  return (
    <nav>
      <ul className="menu">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <div className="menu-item">
              <a href={`${menuItem.to}`} onClick={() => toggleMenu(index)}>
                {menuItem.label}{' '}
              </a>
              {/* {menuItem.submenus && (
                <button className="toggle-btn" onClick={() => toggleMenu(index)}>
                  {menuItem.isOpen ? '-' : '+'}
                </button>
              )} */}
            </div>
            {menuItem.isOpen && menuItem.submenus && (
              <ul className="dropdown">
                {menuItem.submenus.map((submenu, subIndex) => (
                  <li onClick={() => toggleMenu(index)} key={subIndex}>
                    {submenu.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;

// This submenu disappear When clik on submenu too
