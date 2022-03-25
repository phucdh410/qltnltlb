import React from "react";
import PropTypes from "prop-types";

// IMPORTANT Style này bắt buộc không đổi, để giữ video responsive
// const styles = {
//   styleForVideoResponsive: {
//     overflow: "hidden",
//     paddingBottom: "56.25%",
//     position: "relative",
//     height: 0,
//   },
//   styleForIframe: {
//     left: 0,
//     top: 0,
//     height: "100%",
//     width: "100%",
//     position: " absolute",
//   },
// };

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    {/* Border-Radius áp dụng vào thẻ trên */}

    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
