import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Page/HomePage"
import AboutPage from "./Page/AboutPage"
import BlogPage from "./Page/BlogPage"


function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element = {<HomePage/>}  />
      <Route path="/about-page" element = {<AboutPage/>}  />
      <Route path="/blog-page" element = {<BlogPage/>}  />
      
      </Routes> 
    </BrowserRouter>
  )
}

export default App
