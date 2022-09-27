import AllBlog from "./components/AllBlog";
import Footer from "./components/Footer";
import Main from "./components/home/Main";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Main />
        <AllBlog />
        <Footer />
      </div>
    </>
  );
}
