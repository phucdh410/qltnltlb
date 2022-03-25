import React from "react";
import PropTypes from "prop-types";

const Post = ({ image, title, description }) => {
  return (
    <div
      className="container-fluid px-0"
      style={{ marginBottom: "35px" }}
      data-aos="fade-up"
    >
      <div className="row">
        <div className="col-9 col-md-7 col-lg-4 col-xxl-5 mx-auto">
          <div className="post-image">
            <img src={image} alt="image" />
          </div>
        </div>
        <div className="col-12 col-lg-8 col-xxl-7">
          <div className="secondary-title-2">
            <p>{title}</p>
          </div>
          <div className="secondary-text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

Post.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
Post.defaultProps = {
  image: "https://picsum.photos/474/354",
  title: "Tiêu đề bài viết số 1",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
