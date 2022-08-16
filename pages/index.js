import Head from "next/head";
import Image from "next/image";
import Main from "./components/home/Main";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Main />
      </div>
    </>
  );
}
