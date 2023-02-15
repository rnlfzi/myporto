import React from "react";
import ContentPictures from "../components/ContentPictures";
import Layout from "./Layout";

const PicturePage = () => {
  const [pictures, setPictures] = React.useState([]);

  React.useEffect(() => {
    setPictures([]);
  }, []);
  
  return (
    <Layout>
      <ContentPictures pictures={pictures} />
    </Layout>
  );
};

export default PicturePage;
