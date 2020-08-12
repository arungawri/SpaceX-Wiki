import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar, RocketList } from "../components";

export default function Home() {
  return (
    <div className="container bg-light">
      <div className="row justify-content-center">
        <Navbar />
        <RocketList />
      </div>
    </div>
  );
}
