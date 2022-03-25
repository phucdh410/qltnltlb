import React from "react";
import parse from "html-react-parser";
import styles from "styles/Blog.module.scss";

const blogContent = `<p>Hòa chung không khí thi đua sôi nổi của tuổi trẻ cả nước nói chung và tuổi trẻ Thành phố mang tên Bác nói riêng, lập thành tích chào mừng Đại hội Đại biểu Đoàn TNCS Hồ Chí Minh các cấp tiến tới Đại hội Đoàn Thành phố Hồ Chí Minh lần thứ XI và Đại hội Đoàn toàn quốc lần thứ XII, chào mừng kỷ niệm 91 năm ngày thành lập Đoàn TNCS Hồ Chí Minh (26/03/1931 - 26/03/2022). Đặc biệt là cụ thể hoá chủ đề năm 2022: “Xây dựng Đoàn vững mạnh về tổ chức” và đẩy mạnh các hoạt động nâng lực năng lực số cho đoàn viên, thanh niên, phát triển năng lực nghề nghiệp, thích nghi với tình hình mới, vào sáng ngày 27/02/2022, Đoàn Trường Đại học Sư phạm Thành phố Hồ Chí Minh đã long trọng tổ chức Lễ khởi động Tháng Thanh niên năm 2022.</p><p></br></p><p><img src="https://picsum.photos/1444/792"/></p><p></br></p><p>Lễ khởi động rất vinh dự được đón tiếp: Cô Nguyễn Thị Yến Nam - Phó Bí thư Đảng uỷ Trường, Thầy Nguyễn Ngọc Trung - Uỷ viên BTV Đảng uỷ, Phó Hiệu trưởng Trường, Thầy Lâm Thanh Minh - Q. Trưởng phòng CTCT & HSSV, Cô Nguyễn Thị Quỳnh Vân - Trưởng khoa Tiếng Trung, đồng chí Đặng Văn Khoa - Phó Bí thư Đoàn Trường, đồng chí Nguyễn Trà My - Phó Bí thư Đoàn Trường; đại diện Thường trực Quận Đoàn 5, Quận Đoàn Bình Tân, Đoàn Phòng Cảnh sát Giao thông Đường bộ - Đường sắt Công an Thành phố Hồ Chí Minh. Cùng với đó là sự góp mặt của hơn 200 đoàn viên, thanh niên tham dự trực tiếp và gần 2000 đoàn viên, thanh niên theo dõi trực tuyến chương trình.</p><p></br></p><p><img src="https://picsum.photos/1444/792"/></p><p></br></p><p>Lễ khởi động rất vinh dự được đón tiếp: Cô Nguyễn Thị Yến Nam - Phó Bí thư Đảng uỷ Trường, Thầy Nguyễn Ngọc Trung - Uỷ viên BTV Đảng uỷ, Phó Hiệu trưởng Trường, Thầy Lâm Thanh Minh - Q. Trưởng phòng CTCT & HSSV, Cô Nguyễn Thị Quỳnh Vân - Trưởng khoa Tiếng Trung, đồng chí Đặng Văn Khoa - Phó Bí thư Đoàn Trường, đồng chí Nguyễn Trà My - Phó Bí thư Đoàn Trường; đại diện Thường trực Quận Đoàn 5, Quận Đoàn Bình Tân, Đoàn Phòng Cảnh sát Giao thông Đường bộ - Đường sắt Công an Thành phố Hồ Chí Minh. Cùng với đó là sự góp mặt của hơn 200 đoàn viên, thanh niên tham dự trực tiếp và gần 2000 đoàn viên, thanh niên theo dõi trực tuyến chương trình.</p>`;

const BlogContent = () => {
  return (
    <div className="section-wrap">
      <div className="row">
        <div className={`col-12 ${styles.blog__content} mx-auto`}>
          {parse(blogContent)}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
