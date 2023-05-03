import "../App.css";
import React from "react";
import { useHistory } from "react-router-dom";
export default function Base({ title, description, children }) {
  const history = useHistory();
  return (
    <div className="main-component d-flex flex-column align-items-center">
      <div className="row justify-content-center w-100 bg-dark p-2">
        <button
          className="btn btn-light m-3 col-sm-3"
          onClick={() => history.push("/")}
        >
          DashBoard
        </button>
        <button
          className="btn btn-secondary  m-3 col-sm-3"
          onClick={() => history.push("/students")}
        >
          Students list
        </button>
        <button
          className="btn btn-success m-3 col-sm-3"
          onClick={() => {
            history.push("/add");
          }}
        >
          Add-students
        </button>
      </div>
      <header>
        <h1 className="heading text-success text-center m-3">{title}</h1>
      </header>
      <main className="main-segment m-3 text-center">
        <h2>{description}</h2>
        <div>{children}</div>
      </main>
    </div>
  );
}
