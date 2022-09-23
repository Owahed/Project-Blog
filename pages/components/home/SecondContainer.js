import Image from "next/image";
import Link from "next/link";
import Data from "../../../FakeData/FakeData.json";
import Styles from "../../../styles/SecondContainer.module.css";

const SecondContainer = () => {
  //   var last_element = Data.slice().reverse()[0];

  const lastThreeElement = Data.slice(Data.length - 3, Data.length);

  return (
    <>
      <div className={Styles.full_container}>
        <div className={Styles.first_container}>
          <Link
            key={lastThreeElement[2].id}
            href={{
              pathname: `components/home/${lastThreeElement[2].id}`,
            }}
          >
            <a>
              <Image
                loader={() => lastThreeElement[2].image}
                src={lastThreeElement[2].image}
                unoptimized={true}
                alt="Image"
                width={1080}
                height={810}
                priority
              />
              <h1>{lastThreeElement[2].title}</h1>
            </a>
          </Link>
          <h3>{lastThreeElement[2].subTitle}</h3>
        </div>
        <div className={Styles.second_container}>
          <div>
            <Link
              key={lastThreeElement[2].id}
              href={{
                pathname: `components/home/${lastThreeElement[1].id}`,
              }}
            >
              <a>
                <Image
                  loader={() => lastThreeElement[1].image}
                  src={lastThreeElement[1].image}
                  unoptimized={true}
                  alt="Image"
                  width={1080}
                  height={810}
                  priority
                />
                <h3>{lastThreeElement[1].title}</h3>
              </a>
            </Link>
          </div>
          <div>
            <Link
              key={lastThreeElement[2].id}
              href={{
                pathname: `components/home/${lastThreeElement[0].id}`,
              }}
            >
              <a>
                <Image
                  loader={() => lastThreeElement[0].image}
                  src={lastThreeElement[0].image}
                  unoptimized={true}
                  alt="Image"
                  width={1080}
                  height={810}
                  priority
                />
                <h3>{lastThreeElement[0].title}</h3>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondContainer;
