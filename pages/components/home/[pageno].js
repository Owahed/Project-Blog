import { useRouter } from "next/router";
import data from "../../../FakeData/FakeData.json";
import Navbar from "../navbar";
import Styles from "../../../styles/Pageno.module.css";
import { Container } from "@mui/system";
import { useState } from "react";

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
  const router = useRouter();
  const { pageno } = router.query;
  const mainData = data.find((c) => c.id == pageno);
  const { image, imageSubTitle, title, subTitle, blog, id } = mainData;
  console.log(mainData);

  // const { pageno } = params;
  // console.log(pageno);
  return (
    <>
      <div>
        <Navbar id={id} />
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
        {/* <h2>{mainData?.title}</h2>{" "} */}
      </div>
    </>
  );
};

export default PageNo;
