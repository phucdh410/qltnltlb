import Head from "next/head";
import { MainBackground } from "common/components/other";
import { Main } from "modules/Form";

const PhanViecLamTheoLoiBac = () => {
  return (
    <>
      <Head>
        <title>Phần việc làm theo lời Bác</title>
      </Head>

      <main>
        <MainBackground />

        <Main />
      </main>
    </>
  );
};

export default PhanViecLamTheoLoiBac;
