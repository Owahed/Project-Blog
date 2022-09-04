import Styles from "../../../styles/Main.module.css";
import Container from "@mui/material/Container";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import { useState } from "react";

const home = () => {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.hr}></div>
        <div className={Styles.container}></div>
        <div className={Styles.hr}></div>
        <div className={Styles.main_container}>
          <Container fixed>
            <div className={Styles.main_div}>
              <div className={Styles.item1}>
                <FirstContainer />
              </div>
              <div className={Styles.item2}>
                <SecondContainer />
              </div>
              <div className={Styles.item3}>
                <ThirdContainer />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default home;
