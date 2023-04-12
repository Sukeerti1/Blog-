import React from "react";
import "./App.css";
import AddBlogForm from "./features/blogs/AddBlogForm";
import BlogsList from "./features/blogs/BlogsList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
         <AddBlogForm/>
        </div>
        <div className="col-md-6">
         <BlogsList/>
        </div>
      </div>
    </div>
  );
}

export default App;
