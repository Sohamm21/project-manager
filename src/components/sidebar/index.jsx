import React from "react";
import "./index.css";

export const Sidebar = ({
  setIsAddingNewProject,
  projectsData,
  setShowTasks,
  setSelectedProjectId,
  isAddingNewProject,
}) => {
  const handleProjectSelect = (id) => {
    setShowTasks(true);
    setIsAddingNewProject(false);
    setSelectedProjectId(id);
  }

  return (
    <div className="sidebar-wrapper mt-5">
      <h1 className="mt-5">Projects</h1>
      <button
        type="button"
        className="btn btn-secondary sidebar-projects-btn mb-2"
        onClick={() => {
          setIsAddingNewProject(true);
          setShowTasks(false);
        }}
        disabled={isAddingNewProject}
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
