import React from "react";
import { ReadMoreButton } from "common/components/control";
import {
  About,
  BlogsGrid,
  ImageSlider,
  MediaSlider,
} from "common/components/other";

const VietVeBacHo = ({ blogCategory }) => {
  return (
    <div className="section-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row" data-aos="fade-up">
              <div className="col-8 col-lg-10">
                <div className="primary-title">
                  <p>3.2 Viết về Bác Hồ</p>
                </div>
              </div>
              <div className="col-4 col-lg-2">
                {/* <ReadMoreButton /> */}
                <ReadMoreButton url="/danh-sach-bai-viet" />
              </div>
              {blogCategory.description !== "" && (
                <About description={blogCategory.description} />
              )}
            </div>
          </div>
        </div>
        {blogCategory.type === 0 && <BlogsGrid blogs={blogCategory.blogs} />}
        {blogCategory.type === 1 && <ImageSlider blogs={blogCategory.blogs} />}
        {blogCategory.type === 2 && <MediaSlider blogs={blogCategory.blogs} />}
      </div>
    </div>
  );
};

export default VietVeBacHo;
