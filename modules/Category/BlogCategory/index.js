import React from "react";
import { ReadMoreButton } from "common/components/control";
import { About } from "common/components/other";
import { BlogsGrid, ImageSlider, MediaSlider } from "../components";

const BlogCategory = ({ blogCategory }) => {
  return (
    <div className="section-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row align-items-center" data-aos="fade-up">
              <div className="col-8 col-lg-10">
                <div className="primary-title">
                  {blogCategory.description !== "" && (
                    <p>{blogCategory.title}</p>
                  )}
                  {blogCategory.type === "blog" && <p>{blogCategory.title}</p>}
                </div>
              </div>
              <div className="col-4 col-lg-2">
                {blogCategory.type === "blog" && (
                  <ReadMoreButton url={blogCategory.link} />
                )}
              </div>
              {blogCategory.description !== "" && (
                <About description={blogCategory.description} />
              )}
            </div>
          </div>
        </div>
        {blogCategory.type === "blog" && (
          <BlogsGrid blogs={blogCategory.blogs} />
        )}
        {blogCategory.type === "image" && (
          <ImageSlider
            blogs={blogCategory.blogs}
            description={blogCategory.description}
            title={blogCategory.title}
            url={blogCategory.link}
          />
        )}
        {blogCategory.type === "media" && (
          <MediaSlider
            blogs={blogCategory.blogs}
            description={blogCategory.description}
            title={blogCategory.title}
            url={blogCategory.link}
          />
        )}
      </div>
    </div>
  );
};

export default BlogCategory;
