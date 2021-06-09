import React from "react";
import './Sidebar.css'

const SideBar = () => {
  return (
    <div className="sidebar" style={{ backgroundColor: "#201B20", padding: "10px", }}>
      <h5 className="text-white">Find a rental property</h5>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-md-12"
            style={{ borderRadius: "10px", backgroundColor: "#0C0B0B" }}
          >
            {" "}
            <span style={{ color: "#CA18AA" }}>Search area</span> <br />
            <span style={{ color: "white" }}>eg.Oxford or NW3</span>
          </div>
        </div>
        <div class="row mt-3">
          <div
            class="col-5 "
            style={{
              borderRadius: "10px",
              marginLeft: "8px",
              backgroundColor: "#0C0B0B",
            }}
          >
            {" "}
            <span style={{ color: "#CA18AA" }}>
              Minimum beds
              <br />
              <span style={{ color: "white" }}>No min &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;˅</span>
            </span>{" "}
          </div>
          <div
            class="col-5  "
            style={{
              borderRadius: "10px",
              marginLeft: "4px",
              backgroundColor: "#0C0B0B",
            }}
          >
            <span style={{ color: "#CA18AA" }}>Maximum beds</span> <br />
            <span style={{ color: "white" }}>No max&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;˅</span>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-md-12 "
            style={{ borderRadius: "10px", backgroundColor: "#0C0B0B" }}
          >
            <span style={{ color: "#CA18AA" }}>Price per</span> <br />
            <span style={{ color: "white" }}>month &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;˅</span>
          </div>
        </div>
        <div class="row mt-3">
          <div
            class="col-5 "
            style={{
              borderRadius: "10px",
              marginLeft: "8px",
              backgroundColor: "#0C0B0B",
            }}
          >
            <span style={{ color: "#CA18AA" }}>Minimum Price</span> <br />
            <span style={{ color: "white" }}>No min &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;˅</span>
          </div>
          <div
            class="col-5 "
            style={{
              borderRadius: "10px",
              marginLeft: "4px",
              backgroundColor: "#0C0B0B",
            }}
          >
            <span style={{ color: "#CA18AA" }}>Maximum Price</span> <br />
            <span style={{ color: "white" }}>No max &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;˅</span>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-lg  mt-4"
        style={{ marginLeft: "25%", backgroundColor: "#D41553" }}
      >
        Primary button
      </button>
    </div>
  );
};

export default SideBar;
