import React from "react";
import projects from "./data/projects";
import Project from "./components/Project";

function App() {
  return (
    <div>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

export default App;
