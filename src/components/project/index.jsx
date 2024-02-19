import React, { useState } from "react";

import "./index.css";
import AddNewProject from "./newProject";

const Project = ({
  isAddingNewProject,
  setIsAddingNewProject,
  projectsData,
  setProjectsData,
}) => {
  const noProjectSelected = () => {
    return (
      <div className="text-center">
        <img src="project-icon.png" alt="project-icon" />
        <p className="mt-3">Select a project or get started with a new one</p>
        <button
          type="button"
          className="btn btn-dark mt-3"
          onClick={() => {
            setIsAddingNewProject(true);
          }}
        >
          Create new project
        </button>
      </div>
    );
  };
  return (
    <div className="project-wrapper d-flex justify-content-center align-items-center">
      {!isAddingNewProject && noProjectSelected()}
      {isAddingNewProject && (
        <AddNewProject
          setIsAddingNewProject={setIsAddingNewProject}
          projectsData={projectsData}
          setProjectsData={setProjectsData}
        />
      )}
    </div>
  );
};

export default Project;
