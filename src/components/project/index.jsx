import React from "react";

import "./index.css";
import AddNewProject from "./newProject";
import Tasks from "./tasks";

const Project = ({
  isAddingNewProject,
  setIsAddingNewProject,
  projectsData,
  setProjectsData,
  showTasks,
  setShowTasks,
  selectedProjectId,
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
            setShowTasks(false);
          }}
        >
          Create new project
        </button>
      </div>
    );
  };
  return (
    <div className="project-wrapper d-flex justify-content-center align-items-center">
      {!isAddingNewProject && !showTasks && noProjectSelected()}
      {isAddingNewProject && !showTasks && (
        <AddNewProject
          setIsAddingNewProject={setIsAddingNewProject}
          projectsData={projectsData}
          setProjectsData={setProjectsData}
        />
      )}
      {showTasks && !isAddingNewProject && (
        <Tasks
          projectsData={projectsData}
          selectedProjectId={selectedProjectId}
          setProjectsData={setProjectsData}
          setShowTasks={setShowTasks}
          setIsAddingNewProject={setIsAddingNewProject}
        />
      )}
    </div>
  );
};

export default Project;
