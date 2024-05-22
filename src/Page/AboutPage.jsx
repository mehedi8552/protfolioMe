import React from 'react';
import Layout from "../Layout/Layout";
import Progress from '../Component/Progress';
import Resume from '../Component/Resume';
import Showpic from '../Component/Showpic';
const AboutPage = () => {
    return (
        <Layout>
          <Progress/>  
          <Resume/>
          <Showpic/>
        </Layout>
    );
};

export default AboutPage;