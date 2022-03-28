import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { BannerButton } from "../../control";

const Banner = ({ button, link, image, imageAlt }) => {
  console.log(button);
  console.log(link);
  const router = useRouter();
  const [withBtn, setWithBtn] = useState(false);

  useEffect(() => {
    if (button + link !== "") {
      setWithBtn(true);
    }
  }, [button, link]);

  const onClick = () => {
    //console.log(banner.link);
    router.push(`${router.route}${link}`);
  };

  return (
    <div className="section-wrap banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 px-0">
            {/* <div className="banner-container"> */}
            <img className="banner-img" src={image} alt={imageAlt} />
            {withBtn && (
              <BannerButton label={button} onClick={() => onClick()} />
            )}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  button: PropTypes.string,
  link: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.strong,
};
Banner.defaultProps = {
  image: "https://picsum.photos/1920/627",
  imageAlt: "image",
  button: "",
  link: "",
  slug: "",
};
