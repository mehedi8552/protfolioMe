import React from 'react';
import Layout from "../Layout/Layout";
import Skill from '../Component/Skill';
import Resume from '../Component/Resume';
import ImageViwer from '../Component/ImageViwer';
const AboutPage = () => {
    return (
        <Layout>
          <Skill/>  
          <Resume/>
          <ImageViwer/>
        </Layout>
    );
};

export default AboutPage;