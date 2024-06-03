import React from 'react';
import Layout from "../Layout/Layout";
import Progress from '../Component/Progress';
import Resume from '../Component/Resume';
import ImageViwer from '../Component/ImageViwer';
const AboutPage = () => {
    return (
        <Layout>
          <Progress/>  
          <Resume/>
          <ImageViwer/>
        </Layout>
    );
};

export default AboutPage;