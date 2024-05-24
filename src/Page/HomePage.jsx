import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../Component/Hero";
import Services from "../Component/Services";
import Hire from "../Component/Hire";
import Front from "../Component/Front";
import Protfolio from "../Component/Protfolio";
import BlogCard from "../Component/BlogCard";

const Home = () => {
  return (
    <Layout>
      <Front/>
      <Hero />
      <Services/>
      <Hire/>
      <Protfolio/>
      <BlogCard/>
    </Layout>
  );
};

export default Home;
