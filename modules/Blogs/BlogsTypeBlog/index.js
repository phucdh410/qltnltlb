import { PaginationBar } from "common/components/control";
import { MainPost } from "common/components/other";
import React from "react";

const BlogsTypeBlog = ({ title, list }) => {
  return (
    <div className="section-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="primary-title">
              <p>{title}</p>
            </div>
            <div className="row list-posts">
              {list.map((post, i) =>
                i === 0 ? (
                  <div className="col-12 px-0" key={post._id}>
                    <MainPost />
                  </div>
                ) : (
                  <div className="col-11 px-0" key={post._id}>
                    <MainPost />
                  </div>
                )
              )}
              <PaginationBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsTypeBlog;
