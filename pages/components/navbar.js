import React, { useState } from "react";
import Styles from "../../styles/Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ClearIcon from "@mui/icons-material/Clear";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import UseToggle from "../../CustomHooks/useToggle";

const navbar = ({ id }) => {
  const [isShown, toggle] = UseToggle();
  // const [click, setClick] = useState<boolean>(false);
  // const [click, setClick] = useState(  false );
  // const click = false;
  // console.log(isShown, "hh", toggle);
  const handleClick = () => toggle(!isShown);
  return (
    <>
      <div>
        <div>
          <Container fixed>
            <div>
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                  <Toolbar>
                    {id ? (
                      <Link
                        href={{
                          pathname: `/`,
                        }}
                      >
                        <ArrowBackIosIcon className={Styles.back_button} />
                      </Link>
                    ) : (
                      <div></div>
                    )}
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
                <nav className={Styles.navbar}>
                  <div className={Styles.nav_container}>
                    <a exact href="#" className={Styles.nav_logo}>
                      C-Name
                    </a>
                    <ul
                      className={
                        isShown
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
                    </ul>{" "}
                    {/* <button onClick={handleClick}>
                      {isShown ? "show" : "hide"}
                    </button> */}
                    <div className={Styles.nav_icon} onClick={handleClick}>
                      {isShown ? <ClearIcon /> : <MenuIcon />}
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
