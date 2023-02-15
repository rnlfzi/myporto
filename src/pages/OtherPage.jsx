import React from "react";
import ContentOther from "../components/ContentOther";
import Layout from "./Layout";
import { sertifikat } from "../data";

const OtherPage = () => {
  const [others, setOthers] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setOthers(sertifikat)
    }, 1000)
  }, [])

  return (
    <Layout>
      <ContentOther others={others} />
    </Layout>
  )
};

export default OtherPage;
