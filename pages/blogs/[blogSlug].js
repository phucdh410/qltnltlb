import React from "react";
import { BannerDefault } from "common/components/other";
import { getByCategoryId, getBySlug } from "utils/axios";
import { useRouter } from "next/router";
import Head from "next/head";
import { BlogsTypeBlog, BlogsTypeImage } from "modules/Blogs";

const BlogList = ({ blogCategory, blogs }) => {
  const router = useRouter();
  console.log(blogs);
  return (
    <>
      <Head>
        <title>{blogCategory?.title || "Danh sách bài viết"}</title>
      </Head>

      <main>
        <BannerDefault />
        {blogCategory?.type === "image" && (
          <BlogsTypeImage title={blogCategory.title} list={blogs.data} />
        )}
        {blogCategory?.type === "blog" && (
          <BlogsTypeBlog title={blogCategory.title} list={blogs.data} />
        )}
      </main>
    </>
  );
};

export async function getServerSideProps({ params }) {
  let blogProps = {};
  const resBlogCategory = await getBySlug(
    "blogCategories",
    `${params.blogSlug}`
  );
  if (resBlogCategory?.data) {
    const blogCategory = resBlogCategory.data;
    blogProps = { blogCategory };

    const resBlogs = await getByCategoryId("blogs", blogCategory._id);
    if (resBlogs?.data) {
      const blogs = resBlogs;
      blogProps = { ...blogProps, blogs };
    }
  }
  return { props: blogProps };
}
export default BlogList;
