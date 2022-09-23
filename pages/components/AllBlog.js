import { Container } from "@mui/system";
import Styles from "../../styles/AllBlog.module.css";
import Data from "../../FakeData/FakeData.json";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const AllBlog = () => {
  const [mainData, setMainData] = useState(Data);
  return (
    <>
      <div className={Styles.all_blog}>
        <Container fixed>
          <div>
            <div className={Styles.dot_line}></div>
            <h1 className={Styles.h1}>The Latest</h1>
          </div>
          <div className={Styles.border_first_container}></div>
          <div>
            {mainData.map((element) => (
              <div key={element.id}>
                <div className={Styles.blog_card}>
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
                        width={1000}
                        height={810}
                        priority
                      />
                    </a>
                  </Link>
                  <div className={Styles.blog_card_title}>
                    <Link
                      key={element.id}
                      href={{
                        pathname: `components/home/${element.id}`,
                      }}
                    >
                      <a>
                        <h2>{element.title}</h2>
                      </a>
                    </Link>

                    <h5>{element.subTitle}</h5>
                  </div>
                </div>
                <div className={Styles.border_first_container}></div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default AllBlog;
