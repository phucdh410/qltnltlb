import Head from "next/head";
import React from "react";
import { PaginationBar } from "common/components/control";
import { BannerDefault, MainPost } from "common/components/other";

const a = [1, 2, 3, 4, 5];

const DanhSachBaiViet = () => {
  return (
    <div>
      <Head>
        <title>Những tác phẩm của Bác</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerDefault />
      <div className="section-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="primary-title">
                <p>Danh sách bài viết</p>
              </div>
              <div className="row">
                {a.map((post, i) =>
                  i === 0 ? (
                    <div className="col-12 px-0">
                      <MainPost />
                    </div>
                  ) : (
                    <div className="col-11 px-0">
                      <MainPost />
                    </div>
                  )
                )}
                <PaginationBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanhSachBaiViet;
