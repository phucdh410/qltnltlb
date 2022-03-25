import Head from "next/head";
import axios from "axios";
import { MainBackground } from "common/components/other/";
import { useRouter } from "next/router";

const TopicDetail = ({ topic }) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>

      <main>
        <MainBackground />
      </main>
    </>
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`/v1/topics/getBySlug/${params.slug}`);
  console.log(res.data);
  // const topic = res.data.data.data;
  const data = res.data;
  return { props: { topic: data } };
};
export default TopicDetail;
