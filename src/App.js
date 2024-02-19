import React, { useState } from "react";

import "./App.css";
import Project from "./components/project";
import { Sidebar } from "./components/sidebar";

function App() {
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [projectsData, setProjectsData] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  return (
    <div className="projects-container">
      <Sidebar
        isAddingNewProject={isAddingNewProject}
        setIsAddingNewProject={setIsAddingNewProject}
        projectsData={projectsData}
        setShowTasks={setShowTasks}
        setSelectedProjectId={setSelectedProjectId}
      />
      <Project
        isAddingNewProject={isAddingNewProject}
        setIsAddingNewProject={setIsAddingNewProject}
        projectsData={projectsData}
        setProjectsData={setProjectsData}
        showTasks={showTasks}
        setShowTasks={setShowTasks}
        selectedProjectId={selectedProjectId}
      />
    </div>
  );
}

export default App;
