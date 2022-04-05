import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";
import { MainBackground, SuspenseLoading } from "common/components/other/";
import { getBySlug, getByTopicId } from "utils/axios";

const DynamicCategoryTypeBanner = dynamic(
  () => import("modules/Category/CategoryTypeBanner"),
  { loading: () => <SuspenseLoading /> }
);
const DynamicBlogCategory = dynamic(
  () => import("modules/Category/BlogCategory"),
  {
    loading: () => <SuspenseLoading />,
  }
);

const TopicDetail = ({ topic, banners, blogCategories }) => {
  const router = useRouter();

  // console.log(topic);
  // console.log(banners);
  // console.log(blogCategories);

  return (
    <>
      <Head>
        <title>{topic?.name || "Trang topic"}</title>
      </Head>

      <main>
        <MainBackground banners={banners} />

        {blogCategories?.length > 0 &&
          blogCategories.map((blogCategoryGroup, i) =>
            blogCategoryGroup[0].type === "banner" ? (
              <DynamicCategoryTypeBanner
                key={i}
                tagBanners={blogCategoryGroup}
              />
            ) : (
              blogCategoryGroup.map((blogCategory) => (
                <DynamicBlogCategory
                  key={blogCategory._id}
                  blogCategory={blogCategory}
                />
              ))
            )
          )}
      </main>
    </>
  );
};
export const getServerSideProps = async ({ params }) => {
  let topicProps = {};

  const resTopic = await getBySlug("topics", params.slug);
  if (resTopic?.data) {
    const topic = resTopic.data;
    topicProps = { ...topicProps, topic };

    const resBanner = await getByTopicId("banners", topic._id);
    if (resBanner?.data) {
      const banners = resBanner.data;
      topicProps = { ...topicProps, banners };
    }

    const resBlogCategories = await getByTopicId("blogCategories", topic._id);
    if (resBlogCategories?.data) {
      const blogCategories = resBlogCategories.data;
      topicProps = { ...topicProps, blogCategories };
    }
  }

  return { props: topicProps };
};
export default TopicDetail;
