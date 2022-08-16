import Link from "next/link";
import Data from "../../../FakeData/FakeData.json";
import Styles from "../../../styles/FirstContainer.module.css";

const FirstContainer = () => {
  console.log(Data);
  return (
    <>
      <div className={Styles.full_container}>
        <div className={Styles.dot_line}></div>
        <h5 className={Styles.atomic}>Popular Now</h5>
        <div className={Styles.first_container}>
          {Data.map((e) => (
            <>
              <Link href="/">
                <a>
                  <img src={e.image} alt="" />
                  <h4>{e.title}</h4>
                </a>
              </Link>
              <div className={Styles.border_first_container}></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FirstContainer;
