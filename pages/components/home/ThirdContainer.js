import Image from "next/image";
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
              <div key={element.id}>
                <Link
                  key={element.id}
                  href={{
                    pathname: `components/home/${element.id}`,
                  }}
                >
                  <a>
                    <Image
                      loader={() => element.image}
                      src={element.image}
                      unoptimized={true}
                      alt="Image"
                      width={1080}
                      height={810}
                      priority
                    />
                    <h4>{element.title}</h4>
                  </a>
                </Link>
                <div className={Styles.border_first_container}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdContainer;
