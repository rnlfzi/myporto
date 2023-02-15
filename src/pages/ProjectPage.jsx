import React from "react";
import ContentProject from "../components/ContentProject";
import { project } from "../data";
import Layout from "./Layout";

const ProjectPage = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setProjects(project);
    }, 1000);
  }, []);

  return (
    <Layout>
      <ContentProject projects={projects} />
    </Layout>
  );
};

export default ProjectPage;
