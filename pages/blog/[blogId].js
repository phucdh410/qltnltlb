import React from "react";
import { Banner } from "common/components/other";
import { BlogContent, BlogTitle, RelatedBlog } from "modules/Blog";
import { useRouter } from "next/router";
import Head from "next/head";

const BlogDetail = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Head>
        <title>Chi tiết bài viết</title>
      </Head>
      <div className="blog-detail-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 col-md-10 mx-auto">
              <BlogTitle />
              <BlogContent />
              <RelatedBlog />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
