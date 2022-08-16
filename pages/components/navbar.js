import Styles from "../../styles/Navbar.module.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";

const navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div>
        <div>
          {" "}
          <Container fixed>
            <div>
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                  <Toolbar>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      News
                    </Typography>
                    <div className={Styles.iconBar}>
                      <FacebookIcon />
                      <TwitterIcon />
                      <YouTubeIcon />
                      <SearchIcon />
                    </div>
                  </Toolbar>
                </AppBar>
              </Box>
            </div>
          </Container>
          <div className={Styles.navbar_second_div}>
            <Container fixed>
              <div>
                {" "}
                <nav className={Styles.navbar}>
                  <div className={Styles.nav_container}>
                    <a exact href="#" className={Styles.nav_logo}>
                      C-Name
                    </a>

                    <ul
                      className={
                        click
                          ? `${Styles.nav_menu} ${Styles.active}`
                          : `${Styles.nav_menu}`
                      }
                    >
                      <li className={Styles.nav_item}>
                        <a
                          exact
                          href="#"
                          activeClassName="active"
                          className={Styles.nav_as}
                          // onClick={handleClick}
                        >
                          Products
                        </a>
                      </li>
                      <li className={Styles.nav_item}>
                        <a
                          exact
                          href="#"
                          activeClassName="active"
                          className={Styles.nav_as}
                          // onClick={handleClick}
                        >
                          Reviews
                        </a>
                      </li>
                      <li className={Styles.nav_item}>
                        <a
                          exact
                          href="#"
                          activeClassName="active"
                          className={Styles.nav_as}
                          // onClick={handleClick}
                        >
                          Gaming
                        </a>
                      </li>
                      <li className={Styles.nav_item}>
                        <a
                          exact
                          href="#"
                          activeClassName="active"
                          className={Styles.nav_as}
                          // onClick={handleClick}
                        >
                          Contact Us
                        </a>
                      </li>
                      <li className={Styles.nav_item}>
                        <a
                          exact
                          href="#"
                          activeClassName="active"
                          className={Styles.nav_as}
                          // onClick={handleClick}
                        >
                          Login
                        </a>
                      </li>
                    </ul>
                    <div className={Styles.nav_icon} onClick={handleClick}>
                      {click ? <ClearIcon /> : <MenuIcon />}
                    </div>
                  </div>
                </nav>
              </div>{" "}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
