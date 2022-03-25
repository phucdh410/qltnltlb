import Head from "next/head";
import {
  MainBackground,
  Banner,
  TagBannerList,
} from "../../common/components/other/";

const tagBanners = [
  {
    id: 1,
    title: "Cuộc đời và hoạt động của Bác",
    image: "https://picsum.photos/828/436",
  },
  {
    id: 2,
    title: "Hình ảnh tư liệu về Bác",
    image: "https://picsum.photos/828/436",
  },
  {
    id: 3,
    title: "Những mẫu chuyện về Bác",
    image: "https://picsum.photos/828/436",
  },
  {
    id: 4,
    title: "Phim tư liệu về Bác",
    image: "https://picsum.photos/828/436",
  },
];

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

      {/* Section Tag Banner List*/}
      <TagBannerList tagBanners={tagBanners} />

      {/* Section Long Banner */}
      <Banner />
    </div>
  );
};

export default HTTCB;
