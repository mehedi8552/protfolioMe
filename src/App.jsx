import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import BlogPage from "./Page/BlogPage";
import BlogDetailsPage from "./Page/BlogDetailsPage";
import ContactPage from "./Page/ContactPage";
import Error from "./Component/Error";
import TopBtn from "./Component/ScrollToTop";
import ServicePage from "./Page/ServicePage";
import ServiceDetailsPage from "./Page/ServiceDetailsPage";
import ProtfolioPage from "./Page/ProtfolioPage";

function App() {
  return (
    <BrowserRouter>

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
      <TopBtn />
    </BrowserRouter>
  );
}

export default App;
