import { Container } from "@mui/system";
import Styles from "../../styles/AllBlog.module.css";
import Data from "../../FakeData/FakeData.json";
import Link from "next/link";
import { useState } from "react";

const AllBlog = () => {
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
            {Data.map((element) => (
              <>
                <div className={Styles.blog_card}>
                  <Link
                    key={element.id}
                    href={{
                      pathname: `components/home/${element.id}`,
                    }}
                  >
                    <a>
                      <img src={element.image} alt="" />
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
              </>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default AllBlog;
