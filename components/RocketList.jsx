import React, { useEffect, useState } from "react";
import { Rocket } from "./Rocket";

export const RocketList = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((data) => data.json())
      .then(setApiData)
      .catch(console.error);
  }, []);
  return (
    <>
      <div className="col-10 d-flex align-items-start flex-wrap">
        <Rocket />
        <Rocket />
        <Rocket />
        <Rocket />
        <Rocket />
        <Rocket />
        <Rocket />
        <Rocket />
        <Rocket />
        <Rocket />
        <Rocket />
      </div>
    </>
  );
};
