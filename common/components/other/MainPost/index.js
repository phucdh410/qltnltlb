import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const MainPost = ({ href, image, title, description }) => {
  return (
    <Link href={href} passHref>
      <div
        name="main-post"
        className="container-fluid px-0"
        style={{ marginBottom: "35px", cursor: "pointer" }}
        data-aos="fade-up"
      >
        <div className="row">
          <div className="col-10 col-md-8 col-lg-5 col-xxl-4 mx-auto">
            <div className="post-image">
              <img src={image} alt="image" />
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-8">
            <div className="secondary-title">
              <p>{title}</p>
            </div>
            <div className="primary-text">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainPost;

MainPost.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
MainPost.defaultProps = {
  image: "https://picsum.photos/534/361",
  title: "Tiêu đề bài viết số 1",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
