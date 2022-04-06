import Head from "next/head";
import { MainBackground } from "common/components/other";
import { Main } from "modules/Form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getUser } from "utils/axios/auth";

const PhanViecLamTheoLoiBac = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      alert("Bạn cần phải đăng nhập để truy cập trang này");
      toast.error("Bạn chưa đăng nhập");
      return router.back();
    }
    const getUserInfo = async () => {
      const userInfo = await getUser();
      if (!userInfo?.data) {
        // return router.back();
      }
    };
    getUserInfo();
  });

  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }));

  return (
    <>
      <Head>
        <title>Phần việc làm theo lời Bác</title>
      </Head>

      <main>
        <MainBackground />

        {user && <Main student={user} />}
      </main>
    </>
  );
};

export default PhanViecLamTheoLoiBac;
