import React, { useRef, useState } from "react";

const AddNewProject = ({
  setIsAddingNewProject,
  projectsData,
  setProjectsData,
}) => {
  const formRef = useRef();

  const handleAddNewProject = () => {
    const formData = new FormData(formRef.current);
    const titleValue = formData.get("title");
    const descriptionValue = formData.get("description");
    const dateValue = formData.get("date");

    if (!titleValue || !descriptionValue || !dateValue) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedProjectsData = [
      ...projectsData,
      { id: generateRandomId(), title: titleValue, description: descriptionValue, date: dateValue },
    ];
    setProjectsData(updatedProjectsData);
    setIsAddingNewProject(false);
  };

  const handleCancel = () => {
    setIsAddingNewProject(false);
  };

  const generateRandomId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  }

  return (
    <>
      <form className="project-input-wrapper" ref={formRef}>
        <div className="mb-3">
          <label htmlFor="projectFormTitleInput" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="projectFormTitleInput"
            name="title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="projectFormDescriptionInput" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="projectFormDescriptionInput"
            name="description"
            rows="3"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="projectFormDateInput" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="projectFormDateInput"
            name="date"
            required
          />
        </div>
        <div className="mb-3 float-end">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddNewProject}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewProject;
