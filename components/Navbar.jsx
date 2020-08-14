import React, { useState } from "react";
import { Formik, Field } from "formik";

import { ButtonGroup, ToggleButton } from "react-bootstrap";
export const Navbar = ({
  yearValue,
  setYearValue,
  successfulLaunch,
  setSuccessfulLaunch,
  successfulLanding,
  setSuccessfulLanding,
}) => {
  const years = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  return (
    <div className="col-lg-2">
      <div className="card">
        <div className="card-body bg-white">
          <h3>Filters</h3>
          <p className="text-center">Launch Year</p>
          <ButtonGroup toggle className="row">
            {years.map((year) => (
              <React.Fragment key={year}>
                <ToggleButton
                  className="col-5 mr-auto ml-1 my-1"
                  type="radio"
                  id={year}
                  value={year}
                  variant="success"
                  name="yearValue"
                  checked={year === yearValue}
                  onChange={setYearValue}
                >
                  {year}
                </ToggleButton>
              </React.Fragment>
            ))}
          </ButtonGroup>
          <p className="text-center mt-4">Successful Launch</p>
          <div className="text-center">
            <ButtonGroup toggle className="row justify-content-between ">
              <ToggleButton
                className="mr-3"
                type="radio"
                id="successfulLaunchTrue"
                value="true"
                variant="success"
                name="successfulLaunch"
                checked={successfulLaunch === "true"}
                onChange={setSuccessfulLaunch}
              >
                True
              </ToggleButton>
              <ToggleButton
                type="radio"
                id="successfulLaunchFalse"
                value="false"
                variant="success"
                name="successfulLaunch"
                checked={successfulLaunch == "false"}
                onChange={setSuccessfulLaunch}
              >
                False
              </ToggleButton>
            </ButtonGroup>
          </div>
          <p className="mt-4 text-center">Successful Landing</p>
          <div className="text-center">
            <ButtonGroup toggle className="row justify-content-between ">
              <ToggleButton
                className="mr-3"
                type="radio"
                id="successfulLandingTrue"
                value="true"
                variant="success"
                name="successfulLanding"
                checked={successfulLanding === "true"}
                onChange={setSuccessfulLanding}
              >
                True
              </ToggleButton>
              <ToggleButton
                type="radio"
                id="successfulLandingFalse"
                value="false"
                variant="success"
                name="successfulLanding"
                checked={successfulLanding === "false"}
                onChange={setSuccessfulLanding}
              >
                False
              </ToggleButton>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};
