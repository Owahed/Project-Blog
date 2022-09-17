import Link from "next/link";
import Data from "../../../FakeData/FakeData.json";
import Styles from "../../../styles/FirstContainer.module.css";

const FirstContainer = () => {
  var reverse = Data.slice().reverse();
  const citrus = reverse.slice(3, 6);
  return (
    <>
      <div className={Styles.full_container}>
        <div>
          <div className={Styles.dot_line}></div>
          <h5 className={Styles.atomic}>Popular Now</h5>
          <div className={Styles.first_container}>
            {citrus.map((element) => (
              <div key={element.id}>
                <Link
                  key={element.id}
                  href={{
                    pathname: `components/home/${element.id}`,
                  }}
                >
                  <a>
                    <img src={element.image} alt="" />
                    <h4>{element.title}</h4>
                  </a>
                </Link>
              </div>
            ))}
            <div className={Styles.border_first_container}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstContainer;
