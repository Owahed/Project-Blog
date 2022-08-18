import Link from "next/link";
import Data from "../../../FakeData/FakeData.json";
import Styles from "../../../styles/FirstContainer.module.css";

const ThirdContainer = () => {
  var reverse = Data.slice().reverse();
  const citrus = reverse.slice(6, 9);
  return (
    <>
      <div className={Styles.full_container}>
        <div>
          <div className={Styles.first_container}>
            {citrus.map((element) => (
              <>
                <Link href="/">
                  <a>
                    <img src={element.image} alt="" />
                    <h4>{element.title}</h4>
                  </a>
                </Link>
                <div className={Styles.border_first_container}></div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdContainer;
