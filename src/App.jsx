import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import BlogPage from "./Page/BlogPage";
import BlogDetailsPage from "./Page/BlogDetailsPage";
import ContactPage from "./Page/ContactPage";
import Error from "./Component/Error";
import TopBtn from "./Component/Helper/ScrollToTop";
import ServicePage from "./Page/ServicePage";
import ServiceDetailsPage from "./Page/ServiceDetailsPage";
import ProtfolioPage from "./Page/ProtfolioPage";
import Loading from "./Component/Helper/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <Router>
      <LoadingWrapper loading={loading} setLoading={setLoading}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />

        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/blog-details/:id" element={<BlogDetailsPage />} />

        <Route path="/service-page" element={<ServicePage />} />
        <Route path="/service-details/:id" element={<ServiceDetailsPage />}/>

        <Route path="/protfolio-page" element={<ProtfolioPage/>}/>
        
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </LoadingWrapper>
      <TopBtn />
    </Router>
  );
};

const LoadingWrapper = ({ children, loading, setLoading }) => {
  const location = useLocation();

  useEffect(() => {
    const handleLoading = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000); // Simulate loading delay
    };
    handleLoading();
  }, [location, setLoading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {children}
    </>
  );
};


export default App;
