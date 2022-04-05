import React from "react";
import Link from "next/link";
import { MainPost, Post } from "common/components/other";
import { useRouter } from "next/router";

const BlogsGrid = ({ blogs }) => {
  const router = useRouter();
  console.log(router.basePath);
  const blog2To4 = blogs.filter((e, i) => i > 0 && i < 5);
  return (
    blogs?.length > 0 && (
      <div className="col-11 mx-auto">
        <div className="row list-posts">
          <div className="col-12 col-xxl-12">
            <MainPost blog={blogs[0]} href={`/blog/${blogs[0].slug}`} />
          </div>
          {blog2To4.map((blog) => (
            <div key={blog.id} className="col-12 col-xxl-6">
              <Post blog={blog} href={`/blog/${blog.slug}`} />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default BlogsGrid;
