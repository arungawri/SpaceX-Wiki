import React, { useEffect, useState } from "react";
import { Rocket } from "./Rocket";

export const RocketList = ({ apiData }) => {
  return (
    <>
      <div className="col-10">
        <div className="row d-flex align-items-start flex-wrap">
          {apiData.map((rocket) => (
            <Rocket
              key={rocket.flight_number}
              img_patch_small={rocket.links.mission_patch_small}
              rocket_name={rocket.mission_name}
              flight_number={rocket.flight_number}
              mission_id={rocket.mission_id}
              launch_year={rocket.launch_year}
              launch_success={rocket.launch_success}
              land_success={rocket.land_success}
            />
          ))}
        </div>
      </div>
    </>
  );
};
