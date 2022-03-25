import { YouTube } from "@mui/icons-material";
import { Fab } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer section-wrap">
      <div className="container-fluid">
        <div className="row information">
          <div className="col-12 col-lg-5 slogan">
            <p className="innghieng">Không gian trực tuyến</p>
            <p className="tuoitre">
              tuổi trẻ trường đại học sư phạm thành phố hồ chí minh
            </p>
            <p className="innghieng">
              với<span className="bac"> Bác Hồ</span>
            </p>
          </div>
          <div className="col-12 col-lg-7 contact">
            <p className="contact-title">
              đoàn trường đại học sư phạm thành phố hồ chí minh
            </p>
            <ul className="contact-list">
              <li className="contact-item">
                <i className="fa-solid fa-location-dot contact-icon" />

                <span>{`Địa chỉ: ${process.env.NEXT_PUBLIC_REACT_APP_ADDRESS}`}</span>
              </li>
              <li className="contact-item">
                <span>
                  <i className="fa-solid fa-phone contact-icon"></i>
                </span>
                <Link href="tel:+38352020" passHref={true}>
                  <span className="interact">{`Điện thoại: ${process.env.NEXT_PUBLIC_REACT_APP_PHONE}`}</span>
                </Link>
              </li>
              <li className="contact-item">
                <span>
                  <i className="fa-solid fa-globe contact-icon"></i>
                </span>
                <Link
                  href={`http://${process.env.NEXT_PUBLIC_REACT_APP_WEBSITE}`}
                  passHref={true}
                >
                  <span className="interact">{`Website: ${process.env.NEXT_PUBLIC_REACT_APP_WEBSITE}`}</span>
                </Link>
              </li>
              <li className="contact-item">
                <span>
                  <i className="fa-solid fa-envelope contact-icon"></i>
                </span>
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_REACT_APP_EMAIL}`}
                  passHref={true}
                >
                  <span className="interact">{`Email: ${process.env.NEXT_PUBLIC_REACT_APP_EMAIL}`}</span>
                </Link>
              </li>
            </ul>
            <div className="icon">
              <Fab className="facebook" href="//facebook.com">
                <i className="fa-brands fa-facebook-f"></i>
              </Fab>
              <Fab className="youtube" href="//youtube.com">
                <YouTube />
              </Fab>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="col-12">
            <p>
              {`Copyright@${process.env.NEXT_PUBLIC_REACT_APP_COPYRIGHT_YEAR} - Bản quyền thuộc về ${process.env.NEXT_PUBLIC_REACT_APP_COPYRIGHT_BY}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
