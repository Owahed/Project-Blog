import { useRouter } from "next/router";
import Data from "../../../FakeData/FakeData.json";
import Navbar from "../navbar";
import Styles from "../../../styles/Pageno.module.css";
import { Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";

// export const getData = () => {
//   const paths = data.map((e) => {
//     return {
//       params: {
//         pageNo: e.id.toString(),
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };
// console.log(paths);

// export function getServerSideProps(context) {
//   return {
//     props: { params: context.params },
//   };
// }
const PageNo = () => {
  const [data, setData] = useState();

  const router = useRouter();
  const { pageno } = router.query;
  // useEffect(() => {
  const mainData = Data?.find((c) => c.id == pageno);
  console.log(mainData);
  // }, []);

  console.log(data);
  const { image, imageSubTitle, title, subTitle, blog, id } = mainData;

  // const { pageno } = params;
  // console.log(pageno);
  return (
    <>
      <div>
        {/* <Navbar id={id} /> */}
        {mainData ? (
          <div>
            <img className={Styles.pageNo_img} src={image} alt="" />
            <Container fixed>
              <p>{imageSubTitle}</p>
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
    </>
  );
};

export default PageNo;
