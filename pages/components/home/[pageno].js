import { useRouter } from "next/router";
import Data from "../../../FakeData/FakeData.json";
import Navbar from "../navbar";
import Styles from "../../../styles/Pageno.module.css";
import { Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Footer from "../Footer";

export const getStaticPaths = async () => {
  const data = await Data;

  const paths = data.map((e) => {
    return {
      params: {
        pageno: e.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const mainData = Data?.find((c) => c.id == id);

  return {
    props: {
      mainData,
    },
  };
};
const PageNo = ({ mainData }) => {
  // const [data, setData] = useState();

  // const router = useRouter();
  // const { pageno } = router.query;

  // const mainData = Data?.find((c) => c.id == pageno);
  // console.log(mainData);

  // console.log(data);
  const { image, imageSubTitle, title, subTitle, blog, id } = mainData;

  return (
    <>
      <Navbar id={id} />
      <div>
        {mainData ? (
          <div>
            <div className={Styles.pageNo_img}>
              <Image
                loader={() => image}
                unoptimized={true}
                alt="Image"
                width={1080}
                height={810}
                priority
                src={image}
              />
              <p>{imageSubTitle}</p>
            </div>
            <Container fixed>
              <div>
                <h1 className={Styles.pageNo_title}>{title}</h1>
                <h5 className={Styles.pageNo_SubTitle}>{subTitle}</h5>
                <p className={Styles.pageNo_p}>{blog.blogOne}</p>
                <p className={Styles.pageNo_p}>{blog.blogTwo}</p>
              </div>
            </Container>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <Footer />
      {/* <h1>hi{mainData.id}</h1> */}
    </>
  );
};

export default PageNo;
