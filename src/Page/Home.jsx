import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../Component/Hero";
import Services from "../Component/Services";
import Hire from "../Component/Hire";
import Work from "../Component/Work";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services/>
      <Hire/>
      <Work/>
    </Layout>
  );
};

export default Home;
