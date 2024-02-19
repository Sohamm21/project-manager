import React from "react";
import "./index.css";
import AddNewProject from "../project/newProject";

export const Sidebar = ({
  isAddingNewProject,
  setIsAddingNewProject,
  projectsData,
}) => {
  const handleProjectSelect = (id) => {
    console.log();
  }

  return (
    <div className="sidebar-wrapper mt-5">
      <h1>Projects</h1>
      <button
        type="button"
        className="btn btn-secondary sidebar-projects-btn mb-2"
        onClick={() => {
          setIsAddingNewProject(true);
        }}
      >
        + Add Project
      </button>
      <div className="sidebar-projects" id="scrollbar">
        {!!projectsData?.length &&
          projectsData.map((project) => (
            <div key={project?.id} className="ellipsis-text" onClick={()=>{handleProjectSelect(project?.id)}}>{project?.title}</div>
          ))}
      </div>
    </div>
  );
};
