import React from "react";

export const Rocket = ({
  rocket_name,
  mission_id,
  launch_year,
  launch_success,
  land_success,
  img_patch_small,
  flight_number,
}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
      <div className="card my-1">
        <div className="card-body bg-white">
          <img src={img_patch_small} width="150" height="150" />
          <h3>
            {rocket_name}#{flight_number}
          </h3>
          <h3>Mission Ids:</h3>
          {!!mission_id ? mission_id[0] : "null"}
          {/* <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul> */}
          <h3>LaunchYear: {launch_year}</h3>
          <h3>Successful Launch: {launch_success ? "true" : "false"}</h3>
          <h3>Successful Landing: {land_success ? "true" : "false"}</h3>
        </div>
      </div>
    </div>
  );
};
