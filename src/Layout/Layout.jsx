import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div>
           <Navbar/> 
           {props.children} 
           <Footer/>   
        </div>
    );
};

export default Layout;