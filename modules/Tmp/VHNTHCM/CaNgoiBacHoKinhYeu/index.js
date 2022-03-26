import React from "react";
import { ReadMoreButton } from "common/components/control";
import {
  About,
  BlogsGrid,
  ImageSlider,
  MediaSlider,
} from "common/components/other";

const CaNgoiBacHoKinhYeu = ({ blogCategory }) => {
  return (
    <div className="section-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row align-items-center" data-aos="fade-up">
              <div className="col-8 col-lg-10">
                <div className="primary-title">
                  {blogCategory.description !== "" && (
                    <p>3.4 Ca ngợi Bác Hồ kính yêu</p>
                  )}
                </div>
              </div>
              <div className="col-4 col-lg-2">
                {blogCategory.type === 0 && <ReadMoreButton />}
              </div>
              {blogCategory.description !== "" && (
                <About description={blogCategory.description} />
              )}
            </div>
          </div>
        </div>
        {blogCategory.type === 0 && <BlogsGrid blogs={blogCategory.blogs} />}
        {blogCategory.type === 1 && (
          <ImageSlider
            blogs={blogCategory.blogs}
            description={blogCategory.description}
          />
        )}
        {blogCategory.type === 2 && (
          <MediaSlider
            blogs={blogCategory.blogs}
            description={blogCategory.description}
          />
        )}
      </div>
    </div>
  );
};

export default CaNgoiBacHoKinhYeu;
