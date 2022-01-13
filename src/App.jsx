import React, { useState } from "react";
import Project from "./components/Project";

const rawProjects = [
  {
    cover: "recipeBlog.png",
    tags: ["#HTML", "#CSS", "#responsive"],
    title: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    demo: "",
    code: "",
  },
];

function App() {
  const [projects, setProjects] = useState(rawProjects);
  return (
    <div>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

export default App;
