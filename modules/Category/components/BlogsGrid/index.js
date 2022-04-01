import React from "react";
import Link from "next/link";
import { MainPost, Post } from "common/components/other";

const BlogsGrid = ({ blogs }) => {
  const blog2To4 = blogs.filter((e, i) => i > 0 && i < 5);
  return (
    <div className="col-11 mx-auto">
      <div className="row list-posts">
        <div className="col-12 col-xxl-12">
          <Link href={blogs[0].link} passHref>
            <MainPost blog={blogs[0]} />
          </Link>
        </div>
        {blog2To4.map((blog) => (
          <div key={blog.id} className="col-12 col-xxl-6">
            <Link href={blog.link} passHref>
              <Post blog={blog} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsGrid;
