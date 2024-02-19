import React, { useState } from "react";

import "./App.css";
import Project from "./components/project";
import { Sidebar } from "./components/sidebar";

function App() {
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);
  const [projectsData, setProjectsData] = useState([]);
  return (
    <div className="projects-container">
      <Sidebar
        isAddingNewProject={isAddingNewProject}
        setIsAddingNewProject={setIsAddingNewProject}
        projectsData={projectsData}
      />
      <Project
        isAddingNewProject={isAddingNewProject}
        setIsAddingNewProject={setIsAddingNewProject}
        projectsData={projectsData}
        setProjectsData={setProjectsData}
      />
    </div>
  );
}

export default App;
