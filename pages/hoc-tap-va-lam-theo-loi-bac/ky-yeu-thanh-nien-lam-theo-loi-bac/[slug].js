import { BannerDefault, ChiTietKyYeu } from "common/components/other";
import Head from "next/head";
import React from "react";

const ThongTinCaNhan = () => {
  return (
    <>
      <Head>
        <title>Thông tin cá nhân</title>
      </Head>
      <BannerDefault />
      <ChiTietKyYeu />
    </>
  );
};

export default ThongTinCaNhan;
