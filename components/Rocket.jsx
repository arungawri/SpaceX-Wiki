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
          <div className="text-center">
            <img
              src={img_patch_small}
              width="100%"
              height="100%"
              style={{ backgroundColor: "#dddddd" }}
            />
          </div>
          <h3 style={{ color: "#00008B" }}>
            {rocket_name}#{flight_number}
          </h3>
          <h3>
            Mission Ids:{" "}
            <span style={{ color: "#00008B", fontWeight: "normal" }}>
              {!!mission_id[0] ? mission_id[0] : "N/A"}
            </span>
          </h3>
          {/* <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul> */}
          <h3>
            LaunchYear:{" "}
            <span style={{ color: "#00008B", fontWeight: "normal" }}>
              {launch_year}
            </span>
          </h3>
          <h3>
            Successful Launch:{" "}
            <span style={{ color: "#00008B", fontWeight: "normal" }}>
              {launch_success ? "true" : "false"}
            </span>
          </h3>
          <h3>
            Successful Landing:{" "}
            <span style={{ color: "#00008B", fontWeight: "normal" }}>
              {land_success ? "true" : "false"}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};
