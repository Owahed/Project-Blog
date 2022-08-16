import Styles from "../../../styles/Main.module.css";
import Container from "@mui/material/Container";
import FirstContainer from "./FirstContainer";

const home = () => {
  return (
    <>
      <div>
        <div className={Styles.hr}></div>
        <div className={Styles.container}></div>
        <div className={Styles.hr}></div>
        <div className={Styles.main_container}>
          <Container fixed>
            <div className={Styles.main_div}>
              <div className={Styles.item1}>
                <FirstContainer />
              </div>
              <div className={Styles.item2}>dfsdf</div>
              <div className={Styles.item3}>dfsd</div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default home;
