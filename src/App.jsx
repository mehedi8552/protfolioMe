import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Page/HomePage"
import AboutPage from "./Page/AboutPage"
import BlogPage from "./Page/BlogPage"
import BlogDetailsPage from "./Page/BlogDetailsPage"
import ContactPage from "./Page/ContactPage"


function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element = {<HomePage/>}  />
      <Route path="/about-page" element = {<AboutPage/>}  />
      <Route path="/blog-page" element = {<BlogPage/>}  />
      <Route path="/blog-details/:id" element = {<BlogDetailsPage/>}  />
      <Route path="/contact-us" element = {<ContactPage/>}  />
      
      </Routes> 
    </BrowserRouter>
  )
}

export default App
