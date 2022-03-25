import Image from "next/image";
import React from "react";
import styles from "styles/Blog.module.scss";

const a = [1, 2, 3];

const RelatedBlog = () => {
  return (
    <div className={`section-wrap ${styles.blog__related}`}>
      <div className="col-12">
        <h6>Tiếp tục xem</h6>
      </div>
      <div className="col-12">
        <div className="row">
          {a.map((e, i) => (
            <div key={e} className={`col-lg-4 ${styles.related__blog__item}`}>
              <div className={styles.related__blog__image}>
                <img src="https://picsum.photos/435/336" alt="image" />
              </div>
              <div
                className={styles.related__blog_author}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>
                  <strong>Võ Tuấn Hào - </strong>27 Dec 2020
                </p>
                <span>
                  <strong>
                    <Image
                      src="/assets/images/icon/Eye.svg"
                      alt="eye-icon"
                      height={15}
                      width={15}
                    />
                    &nbsp;552
                  </strong>
                </span>
              </div>
              <p className={styles.related__blog__title}>
                Tuổi trẻ Trường Đại học Sư phạm TP. Hồ Chí Minh sôi nổi khởi
                động tháng Thanh niên 2022
              </p>
              <p className={styles.related__blog__description}>
                Hòa chung không khí thi đua sôi nổi của tuổi trẻ cả nước nói
                chung và tuổi trẻ Thành phố mang tên Bác nói riêng, lập thành
                tích chào mừng Đại hội Đại biểu Đoàn TNCS Hồ Chí Minh ...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedBlog;
// lấy top 3 bài viết liên quan
