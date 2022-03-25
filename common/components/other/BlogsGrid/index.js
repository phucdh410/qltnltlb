import React from "react";
import MainPost from "../MainPost";
import Post from "../Post";

const BlogsGrid = ({ blogs }) => {
  const blog2To4 = blogs.filter((e, i) => i > 0 && i < 5);
  return (
    <div className="col-11 mx-auto">
      <div className="row list-posts">
        <div className="col-12 col-xxl-12">
          <MainPost blog={blogs[0]} />
        </div>
        {blog2To4.map((blog) => (
          <div key={blog.id} className="col-12 col-xxl-6">
            <Post blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsGrid;
