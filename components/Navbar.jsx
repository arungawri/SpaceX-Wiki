import React, { useState } from "react";
import { Formik, Field } from "formik";

export const Navbar = () => {
  return (
    <Formik
      initialValues={{
        yearValue: "",
        successfulLaunch: "",
        successfulLanding: "",
      }}
    >
      {(formik) => (
        <div className="col-lg-2">
          <h3>SpaceX Launch Programs</h3>
          <div className="card">
            <div className="card-body bg-white">
              <h3>Filters</h3>
              <h3 className="font-weight-light text-center">
                Launch Year
              </h3>{" "}
              <div className="d-flex flex-row flex-wrap justify-content-between">
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2006" />
                    2006
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2007" />
                    2007
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2008" />
                    2008
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2009" />
                    2009
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2010" />
                    2010
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2011" />
                    2011
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2012" />
                    2012
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2013" />
                    2013
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2014" />
                    2014
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2015" />
                    2015
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2016" />
                    2016
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2017" />
                    2017
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2018" />
                    2018
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2019" />
                    2019
                  </label>
                  <label className="btn btn-success m-1 col-6">
                    <Field name="yearValue" type="radio" value="2020" />
                    2020
                  </label>
                </div>
              </div>
              <h3 className="font-weight-light text-center">
                Successful Launch
              </h3>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-success m-1 col-6">
                  <Field name="successfulLaunch" type="radio" value="true" />
                  True
                </label>
                <label className="btn btn-success m-1 col-6">
                  <Field name="successfulLaunch" type="radio" value="false" />
                  False
                </label>
              </div>
              <h3 className="font-weight-light text-center">
                Successful Landing
              </h3>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-success m-1 col-6">
                  <Field name="successfulLanding" type="radio" value="true" />
                  True
                </label>
                <label className="btn btn-success m-1 col-6">
                  <Field name="successfulLanding" type="radio" value="false" />
                  False
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
