import React from "react";

import image from "./Images/logo.png";
import { Navbar, Nav } from "react-bootstrap";

import "./Styles/Navigation.css";

// const SideNav = () => {
//   const handleClick = e => {};

//   return (
//     <div className={styles.sidenav}>
//       <img src={image} alt="Logo" />
//       <div className={styles.flexList}>
//         {items.map(item => {
//           return (
//             <Link
//               to={item.path}
//               className={styles.navLink}
//               key={item.name}
//               onClick={handleClick}
//             >
//               <Tooltip title={item.name} placement="right" arrow>
//                 <Button
//                   className={`${
//                     item.active ? styles.activeIconButton : styles.iconButton
//                   }`}
//                 >
//                   <FontAwesomeIcon icon={item.icon} />
//                 </Button>
//               </Tooltip>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SideNav;
const SideNav = () => {
  return (
    <Navbar className="navi " collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <img src={image} alt="Logo" className="logo" />
        QUICK GAMES
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/help">Help</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default SideNav;
