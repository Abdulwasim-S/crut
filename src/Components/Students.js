import React, { useState } from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Students({ students, setStudents }) {
  const history = useHistory();

  //delete functionality
  const deleteStudent = async (studId) => {
    const response = await fetch(
      `https://644b33c517e2663b9deab9c8.mockapi.io/users/${studId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data) {
      const remainingStudents = students.filter(
        (stud, idx) => stud.id !== studId
      );
      setStudents(remainingStudents);
    }
    
  };
  
  return (
    <Base
      title={"Students DashBoard"}
      description={"This page contains all students data"}
    >
      
      <div className="container">
        <div className="row d-flex justify-content-around" id="row">
          {students.map((stud, idx) => (
            <div
              className="student-data-card col-sm-6 col-md-4 col-lg-3 border border-secondary shadow rounded m-3 p-3 h-100"
              id={(stud.name +stud.batch +stud.gender +stud.qualification).toLowerCase()}
              key={idx}
            >
              <div className="content">
                <h3>{stud.name}</h3>
                <p>
                  <span className="text-muted">Batch - </span>
                  {stud.batch}
                </p>
                <p>
                  <span className="text-muted">Gender - </span>
                  {stud.gender}
                </p>
                <p>
                  <span className="text-muted">Qualification - </span>
                  {stud.qualification}
                </p>
              </div>
              <data className="controls">
                <button
                  className="btn btn-secondary"
                  onClick={() => history.push(`/edit/${stud.id}`)}
                >
                  Edit
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteStudent(stud.id)}
                >
                  Delete
                </button>
              </data>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
}
