import React, { useState, useRef } from "react";

const Tasks = ({ projectsData, selectedProjectId, setProjectsData }) => {
  const findProjectById = () => {
    return projectsData.find((project) => project.id === selectedProjectId);
  };

  const selectedProject = findProjectById();
  const inputRef = useRef(null);

  const handleAddTask = () => {
    if (inputRef?.current?.value.trim() !== "") {
      const updatedProjectsData = projectsData.map((project) => {
        if (project.id === selectedProjectId) {
          return {
            ...project,
            tasks: [...(project?.tasks || []), inputRef?.current?.value],
          };
        }
        return project;
      });

      setProjectsData(updatedProjectsData);
      inputRef.current.value = '';
    }
  };
  console.log(projectsData);
  return (
    <>
      {selectedProject ? (
        <div className="tasks-container">
          <div>
            <h1>{selectedProject?.title}</h1>
            <p>{selectedProject?.date}</p>
            <p>{selectedProject?.description}</p>
          </div>
          <div>
            <h1>Tasks</h1>
            <div className="row g-2 align-items-center">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  ref={inputRef}
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-outline-dark" onClick={handleAddTask}>
                  Add Task
                </button>
              </div>
            </div>
          </div>
          <div className="tasks-wrapper">
            {selectedProject?.tasks && selectedProject?.tasks.map((task) => <div key={task} className="task d-flex align-items-center">{task}</div>)}
          </div>
        </div>
      ) : (
        <p>No project found for the selected ID</p>
      )}
    </>
  );
};

export default Tasks;
