import { BlogCategory } from "modules/Category";
import Head from "next/head";
import {
  MainBackground,
  Banner,
  TagBannerList,
} from "../../common/components/other/";

const blogCategory = {
  _id: "blog_category-4",
  slug: "blog_category-4",
  type: 3,
  title: "Hành trình theo chân Bác",
  link: "/hanh-trinh-theo-chan-bac",
  description: "",
  blogs: [
    {
      id: 1,
      title: "Cuộc đời và hoạt động của Bác",
      image: "https://picsum.photos/828/436",
      size: 6,
      button: "",
      link: "#",
      slug: "#",
    },
    {
      id: 2,
      title: "Hình ảnh tư liệu về Bác",
      image: "https://picsum.photos/828/436",
      size: 6,
      button: "",
      link: "#",
      slug: "#",
    },
    {
      id: 3,
      title: "Những mẫu chuyện về Bác",
      image: "https://picsum.photos/828/436",
      size: 6,
      button: "",
      link: "#",
      slug: "#",
    },
    {
      id: 4,
      title: "Phim tư liệu về Bác",
      image: "https://picsum.photos/828/436",
      size: 6,
      button: "",
      link: "#",
      slug: "#",
    },
    {
      id: 5,
      title: "Địa danh lịch sử",
      image: "https://picsum.photos/828/436",
      size: 12,
      button: "",
      link: "",
      slug: "",
    },
  ],
};

const HTTCB = () => {
  return (
    <div>
      <Head>
        <title>Hành trình theo chân Bác</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Section Main Background */}
      <MainBackground />

      <BlogCategory blogCategory={blogCategory} />
    </div>
  );
};

export default HTTCB;
