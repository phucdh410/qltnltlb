import React from "react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="page404 section-wrap">
      <h1>404 Oops Nhầm Trang</h1>
      <p className="zoom-area">
        <b>Rất tiếc</b> Đường dẫn bạn truy cập có lẽ bị sai rồi.
      </p>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <Link href="/" className="more-link">
          Trở lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
