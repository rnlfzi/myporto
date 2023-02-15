import React from "react";
import ContentHome from "../components/ContentHome";
import { education, skill, work } from "../data";
import Layout from "./Layout";

const HomePage = () => {
  const [educations, setEducations] = React.useState([]);
  const [works, setWorks] = React.useState([]);
  const [skills, setSkills] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setEducations(education);
      setWorks(work);
      setSkills(skill);
    }, 1000);
  }, []);

  return (
    <Layout>
      <ContentHome educations={educations} works={works} skills={skills} />
    </Layout>
  );
};

export default HomePage;
