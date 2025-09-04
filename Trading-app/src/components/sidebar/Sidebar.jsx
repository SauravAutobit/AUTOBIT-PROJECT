import "./Sidebar.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import backArrow from "../../assets/icons/backArrow.svg";
import sidebarIcon from "../../assets/icons/sidebarIcon.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import Collapse from "react-bootstrap/Collapse";
import downArrow from "../../assets/icons/downArrow.svg";
import { Link } from "react-router-dom";
import { sidebarOptions } from "../../constant";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [show, setShow] = useState(true);
  const [openIndex, setOpenIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShow = () => {
    setShow(!show);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sideBarHandler = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="sidebar-container">
        <div className={show ? "sidebar-icons-hide" : "sidebar-icons"}>
          <Button className="sidebar-btn" onClick={handleShow}>
            <img
              src={show ? backArrow : rightArrow}
              width="6.87px"
              height="11.67px"
            />
          </Button>
          {Array.from({ length: 13 }).map((_, index) => (
            <img
              key={index}
              src={sidebarIcon}
              width="24px"
              className="sidebar-side-icon"
              onClick={handleShow}
            />
          ))}
        </div>
        <Offcanvas
          show={show}
          backdrop={false}
          scroll={true}
          className="sidebar-offcanvas"
        >
          <Offcanvas.Body className="sidebar-offcanvas-slider">
            <div className="sidebar-icons">
              <Button className="sidebar-btn" onClick={handleShow}>
                <img
                  src={show ? backArrow : rightArrow}
                  width="6.87px"
                  height="11.67px"
                />
              </Button>
              {sidebarOptions.map((option, index) => {
                return (
                  <div key={index}>
                    <div
                      className="sidebar-options-container"
                      onClick={() => sideBarHandler(index)}
                    >
                      <div className="sidebar-icon-name">
                        <img
                          src={sidebarIcon}
                          width={"24px"}
                          className="sidebar-side-icon"
                          onClick={handleShow}
                        />
                        <p className="sidebar-options">{option.title}</p>
                      </div>
                      <img
                        src={openIndex === index ? downArrow : rightArrow}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <Collapse in={openIndex === index}>
                      <div id="example-collapse-text">
                        <ul>
                          {option.children.map((child, index) => {
                            return (
                              <Link
                                key={index}
                                to={child.link}
                                onClick={() => setActiveIndex(index)}
                              >
                                <li
                                  className={`sidebar-subOptions ${
                                    activeIndex === index ? "after" : ""
                                  }`}
                                >
                                  {child.name}
                                </li>
                              </Link>
                            );
                          })}{" "}
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                );
              })}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
{
  /* col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12 */
}

// import React, { useState } from "react";
// import {
//   Box,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   Toolbar,
//   CssBaseline,
//   Typography,
// } from "@mui/material";
// import {
//   ChevronLeft,
//   ChevronRight,
//   ExpandLess,
//   ExpandMore,
//   Menu as MenuIcon,
// } from "@mui/icons-material";
// import InboxIcon from "@mui/icons-material/Inbox";
// import { styled } from "@mui/material/styles";
// import { Link } from "react-router-dom";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: theme.spacing(7) + 1,
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const StyledDrawer = styled(Drawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// const Sidebar = () => {
//   // const theme = useTheme();
//   const [open, setOpen] = useState(true);
//   const [openIndex, setOpenIndex] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(null);

//   const sidebarOptions = [
//     {
//       title: "User Management",
//       children: ["User", "Trading Account"],
//       link: "/",
//     },
//     {
//       title: "Trading A/C Management",
//       children: ["Brokerage Plan", "Account Setup", "A/C Mapping"],
//     },
//     {
//       title: "Admins Management",
//       children: ["Create Admin", "Manage Roles"],
//     },
//     {
//       title: "Instrument Management",
//       children: ["Add Instrument", "Import CSV", "Instrument Settings"],
//     },
//     {
//       title: "Rule Engine Management",
//       children: ["Create Rule", "Manage Rules"],
//     },
//     {
//       title: "Setting Property Management",
//       children: ["Preferences", "Themes", "Notifications"],
//     },
//     {
//       title: "Admin Page Management",
//       children: ["Manage Pages", "Access Logs"],
//     },
//     {
//       title: "Query Page",
//       children: ["Run Query", "Saved Queries"],
//     },
//     {
//       title: "History Management",
//       children: ["User History", "Audit Logs"],
//     },
//     {
//       title: "Server Management",
//       children: ["Server Status", "Restart Server"],
//     },
//     {
//       title: "Reports Management",
//       children: ["Daily Reports", "Monthly Reports"],
//     },
//     {
//       title: "CRM",
//       children: ["Customer List", "Lead Tracking"],
//     },
//   ];

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   const handleCollapseToggle = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <StyledDrawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerToggle}>
//             {open ? <ChevronLeft /> : <ChevronRight />}
//           </IconButton>
//         </DrawerHeader>
//         <List>
//           {sidebarOptions.map((option, index) => (
//             <Box key={index}>
//               <ListItem button onClick={() => handleCollapseToggle(index)}>
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                 {open && <ListItemText primary={option.title} />}
//                 {open ? (
//                   openIndex === index ? (
//                     <ExpandLess />
//                   ) : (
//                     <ExpandMore />
//                   )
//                 ) : null}
//               </ListItem>
//               <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   {option.children.map((child, childIdx) => (
//                     <ListItem
//                       key={childIdx}
//                       button
//                       sx={{
//                         pl: 4,
//                         bgcolor:
//                           activeIndex === `${index}-${childIdx}`
//                             ? "primary.light"
//                             : "transparent",
//                       }}
//                       component={Link}
//                       to={option.link || "#"}
//                       onClick={() => setActiveIndex(`${index}-${childIdx}`)}
//                     >
//                       <ListItemText primary={child} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Collapse>
//             </Box>
//           ))}
//         </List>
//       </StyledDrawer>

//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Typography variant="h6">Main Content Area</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Sidebar;
