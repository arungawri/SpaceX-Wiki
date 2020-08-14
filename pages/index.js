import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Navbar, RocketList } from "../components";
import { useInput } from "../components/hooks/useInput";

export default function Home() {
  const [yearValue, setYearValue] = useInput("");
  const [successfulLaunch, setSuccessfulLaunch] = useInput("");
  const [successfulLanding, setSuccessfulLanding] = useInput("");
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    let dataQuery;
    setLoading("Loading");
    if (yearValue && successfulLaunch && successfulLanding) {
      dataQuery = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${successfulLaunch}&land_success=${successfulLanding}&launch_year=${yearValue}`;
    } else if (!yearValue && successfulLaunch && successfulLanding) {
      dataQuery = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${successfulLaunch}&land_success=${successfulLanding}`;
    } else if (!yearValue && successfulLaunch && !successfulLanding) {
      dataQuery = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${successfulLaunch}`;
    } else {
      dataQuery = "https://api.spaceXdata.com/v3/launches?limit=100";
    }
    console.log(dataQuery);
    fetch(dataQuery)
      .then((data) => data.json())
      .then(setApiData)
      .then(setLoading(""))
      .catch(console.error);
  }, [yearValue, successfulLaunch, successfulLanding]);

  // useEffect(() => {
  //   fetch("https://api.spaceXdata.com/v3/launches?limit=100")
  //     .then((data) => data.json())
  //     .then(setApiData)
  //     .catch(console.error);
  // }, []);

  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-12">
          <h3>SpaceX Launch Programs</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <Navbar
          yearValue={yearValue}
          setYearValue={setYearValue}
          successfulLaunch={successfulLaunch}
          setSuccessfulLaunch={setSuccessfulLaunch}
          successfulLanding={successfulLanding}
          setSuccessfulLanding={setSuccessfulLanding}
        />
        <h1>{loading}</h1>
        <RocketList apiData={apiData} />
      </div>
      <div className="row justify-content-centre">
        <div className="col-12 text-center">
          <h3>Developed By: Arun Gawri</h3>
        </div>
      </div>
    </div>
  );
}
