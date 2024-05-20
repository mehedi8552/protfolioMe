import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../Component/Hero";
import Services from "../Component/Services";
import Hire from "../Component/Hire";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services/>
      <Hire/>
    </Layout>
  );
};

export default Home;
