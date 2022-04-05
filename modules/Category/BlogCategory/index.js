import React, { useEffect, useState } from "react";
import { ReadMoreButton } from "common/components/control";
import { About } from "common/components/other";
import { BlogsGrid, ImageSlider, MediaSlider } from "../components";
import { getByCategoryId } from "utils/axios";

const BlogCategory = ({ blogCategory }) => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  const getBlogs = async () => {
    const res = await getByCategoryId("blogs", blogCategory._id);
    if (res?.data) {
      setBlogs(res.data);
    }
  };
  console.log(blogs);
  useEffect(() => {
    getBlogs();
  }, [blogCategory]);

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
                  {blogCategory.type === "blog" &&
                    blogCategory.description === "" && (
                      <p>{blogCategory.title}</p>
                    )}
                </div>
              </div>
              <div className="col-4 col-lg-2">
                {blogCategory.type === "blog" && (
                  <ReadMoreButton url={blogCategory.slug} />
                )}
              </div>
              {blogCategory.description !== "" && (
                <About description={blogCategory.description} />
              )}
            </div>
          </div>
        </div>
        {blogs?.length > 0 &&
          ((blogCategory.type === "blog" && <BlogsGrid blogs={blogs} />) ||
            (blogCategory.type === "image" && (
              <ImageSlider
                blogs={blogs}
                description={blogCategory.description}
                title={blogCategory.title}
                url={blogCategory.slug}
              />
            )) ||
            (blogCategory.type === "media" && (
              <MediaSlider
                blogs={blogs}
                description={blogCategory.description}
                title={blogCategory.title}
                url={blogCategory.slug}
              />
            )))}
      </div>
    </div>
  );
};

export default BlogCategory;
