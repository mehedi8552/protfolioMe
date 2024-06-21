import React from "react";
//import Loader from "../Component/Loading";
import Layout from "../Layout/Layout";
import Hero2 from "../Component/Hero2";
import Services from "../Component/Services";
import HireMe from "../Component/HireMe";
import Hero from "../Component/Hero";
import Protfolio from "../Component/Protfolio";
import BlogCard from "../Component/BlogCard";
const Home = () => {
  return (
    <Layout>
      <Hero/>
      <Hero2/>
      <Services/>
      <HireMe/>
      <Protfolio/>
      <BlogCard/>
    </Layout>
  );
};

export default Home;
