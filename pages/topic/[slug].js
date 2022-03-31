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
  // console.log(topic);
  // console.log(banners);
  // console.log(blogCategories);

  const router = useRouter();
  return (
    <>
      <Head>
        <title>{topic.name}</title>
      </Head>

      <main>
        <MainBackground banners={banners} />

        {blogCategories.map((blogCategoryGroup, i) =>
          blogCategoryGroup[0].type === "banner" ? (
            <DynamicCategoryTypeBanner key={i} tagBanners={blogCategoryGroup} />
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
  const resTopic = await getBySlug("topics", params.slug);
  const topic = resTopic.data;
  console.log(topic);
  const resBanner = await getByTopicId("banners", topic._id);
  const banners = resBanner.data;

  const resBlogCategories = await getByTopicId("blogCategories", topic._id);
  const blogCategories = resBlogCategories.data;

  return { props: { topic, banners, blogCategories } };
};
export default TopicDetail;
