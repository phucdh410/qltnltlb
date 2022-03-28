import React from "react";
import Head from "next/head";
import { main_banner_with_button, blogCategory2 } from "mock/data";
import { MainBackground } from "common/components/other/";
import { BlogCategory } from "modules/Category";

const HTVLTLB = () => {
  return (
    <>
      <Head>
        <title>Học tập và làm theo lời Bác</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Section main background */}
      <MainBackground banner={main_banner_with_button} />
      {blogCategory2.map((blogCategory) => (
        <BlogCategory key={blogCategory._id} blogCategory={blogCategory} />
      ))}
    </>
  );
};

export default HTVLTLB;
