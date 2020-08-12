import React from "react";

export const Navbar = () => {
  return (
    <div className="col-lg-2">
      <h3>SpaceX Launch Programs</h3>
      <div className="card">
        <div className="card-body bg-white">
          <h3>Filters</h3>
          <h3 className="font-weight-light text-center">Launch Year</h3>
          <div className="d-flex flex-row flex-wrap justify-content-between">
            <button className="btn btn-success mx-3">2006</button>
            <button className="btn btn-success mx-3">2006</button>
            <button className="btn btn-success mx-3">2006</button>
            <button className="btn btn-success mx-3">2006</button>
            <button className="btn btn-success mx-3">2006</button>
            <button className="btn btn-success mx-3">2006</button>
            <button className="btn btn-success mx-3">2006</button>
            <button className="btn btn-success mx-3">2006</button>
            <button className="btn btn-success mx-3">2006</button>
            <button className="btn btn-success mx-3">2006</button>
            <button className="btn btn-success mx-3">2006</button>
          </div>
          <h3 className="font-weight-light text-center">Successful Launch</h3>
          <button className="btn btn-success">True</button>
          <h3 className="font-weight-light text-center">Successful Landing</h3>
          <button className="btn btn-success">True</button>
        </div>
      </div>
    </div>
  );
};
