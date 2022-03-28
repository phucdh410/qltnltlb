//Mock
export const main_banner_without_button = {
  id: "",
  title: "Banner học tập và làm theo lời Bác",
  desciption: "Mô tả của banner",
  image: "https://picsum.photos/1920/1080",
  imageThumb: "https://picsum.photos/1920/1080",
  imageAlt: "image-alt",
  button: "",
  link: "",
};
export const main_banner_with_button = {
  id: "",
  title: "Banner học tập và làm theo lời Bác",
  desciption: "Mô tả của banner",
  image: "https://picsum.photos/1920/1080",
  imageThumb: "https://picsum.photos/1920/1080",
  imageAlt: "image-alt",
  button: "Đăng ký phần việc làm theo lời Bác",
  link: "/phan-viec-lam-theo-loi-bac",
};
export const banner_without_button = {
  id: "",
  title: "Banner học tập và làm theo lời Bác",
  desciption: "Mô tả của banner",
  image: "https://picsum.photos/1440/360",
  imageThumb: "https://picsum.photos/1440/360",
  imageAlt: "image-alt",
  button: "",
  link: "",
};
export const banner_with_button = {
  id: "",
  title: "Banner học tập và làm theo lời Bác",
  desciption: "Mô tả của banner",
  image: "https://picsum.photos/1440/360",
  imageThumb: "https://picsum.photos/1440/360",
  imageAlt: "image-alt",
  button: "Kỷ yếu thanh niên làm theo lời Bác",
  link: "/ky-yeu-thanh-nien-lam-theo-loi-bac",
};
export const testDangKy = {
  id: "",
  title: "Banner học tập và làm theo lời Bác",
  desciption: "Mô tả của banner",
  image: "https://picsum.photos/1440/360",
  imageThumb: "https://picsum.photos/1440/360",
  imageAlt: "image-alt",
  button: "Đăng ký phần việc làm theo lời Bác",
  link: "/dang-ky-phan-viec-lam-theo-loi-bac",
};
export const students = [
  {
    id: "student-1",
    username: "43.01.104.001",
    fullname: "Test User 1",
    department: "CNTT",
    avatar: "https://picsum.photos/180/240/",
  },
  {
    id: "student-2",
    username: "43.01.104.002",
    fullname: "Test User 2",

    department: "CNTT",
    avatar: "https://picsum.photos/180/240/",
  },
  {
    id: "student-3",
    username: "43.01.104.003",
    fullname: "Test User 3",

    department: "CNTT",
    avatar: "https://picsum.photos/180/240/",
  },
  {
    id: "student-4",
    username: "43.01.104.004",
    fullname: "Test User 4",

    department: "CNTT",
    avatar: "https://picsum.photos/180/240/",
  },
  {
    id: "student-5",
    username: "43.01.104.005",
    fullname: "Test User 5",

    department: "CNTT",
    avatar: "https://picsum.photos/180/240/",
  },
  {
    id: "student-6",
    username: "43.01.104.005",
    fullname: "Test User 6",

    department: "CNTT",
    avatar: "https://picsum.photos/180/240/",
  },
  {
    id: "student-7",
    username: "43.01.104.005",
    fullname: "Test User 7",

    department: "CNTT",
    avatar: "https://picsum.photos/180/240/",
  },
];
export const student = {
  id: "student-1",
  username: "43.01.104.001",
  fullname: "Test User 1",
  department: "CNTT",
  avatar: "https://picsum.photos/180/240/",
  achievement: [
    {
      id: "1",
      year: "2021",
      content:
        "- Điểm học tập: 7.5 \n- Điểm rèn luyện: 7.5 \n- Xếp loại đoàn viên: tốt \n- Thành tích 1: asd \n- Thành tích 2: asdasd",
    },
    {
      id: "2",
      year: "2022",
      content:
        "- Điểm học tập: 7.5 \n- Điểm rèn luyện: 7.5 \n- Xếp loại đoàn viên: tốt \n- Thành tích 1: asd \n- Thành tích 2: asdasd",
    },
  ],
};

import topic1 from "./images/topic1.png";
import topic2 from "./images/topic2.png";
import topic3 from "./images/topic3.png";
export const topics = [
  {
    id: 1,
    label: "Hành trình theo chân Bác",
    image: topic1.src,
    link: "/hanh-trinh-theo-chan-bac",
    // image: "https://picsum.photos/492/390",
  },
  {
    id: 2,
    label: "Văn hóa, nghệ thuật Hồ Chí Minh",
    image: topic2.src,
    link: "/van-hoa-nghe-thuat-ho-chi-minh",
    // image: "https://picsum.photos/492/390",
  },
  {
    id: 3,
    label: "Học tập và làm theo lời Bác",
    image: topic3.src,
    link: "/hoc-tap-va-lam-theo-loi-bac",
    // image: "https://picsum.photos/492/390",
  },
  {
    id: 4,
    label: "Topic example 4",
    image: "https://picsum.photos/492/390",
    link: "",
  },
  {
    id: 5,
    label: "Topic example 5",
    image: "https://picsum.photos/492/390",
    link: "",
  },
  {
    id: 6,
    label: "Topic example 6",
    image: "https://picsum.photos/492/390",
    link: "",
  },
];

export const diaries = [
  {
    id: 1,
    name: "Hoàng Tuấn Đức",
    image: "https://picsum.photos/181/178",
    khoa: "Sinh viên K44",
    department: "Khoa Vật lý",
    achievement: "Sinh viên 5 tốt cấp Trung ương 02 năm liền 2020, 2021",
    hobby:
      "Đam mê nghiên cứu khoa học chính là động lực để Đức hoàn thiện bản thân hơn. Mặc dù tự nhận bản thân không phải là người xuất sắc và thông minh, nhưng với sự nỗ lực không ngừng, Đức luôn tin rằng bản thân sẽ đạt được những mục tiêu đã đề ra.",
  },
  {
    id: 2,
    name: "Hoàng Tuấn Đức",
    image: "https://picsum.photos/181/178",
    khoa: "Sinh viên K44",
    department: "Khoa Vật lý",
    achievement: "Sinh viên 5 tốt cấp Trung ương 02 năm liền 2020, 2021",
    hobby:
      "Qua những ý kiến của mọi người, tôi có thể rút kinh nghiệm, có thêm những bài học và có thêm những suy nghĩ vững vàng hơn. Đó là lý do, bài viết qua thời gian thì bây giờ tôi mới có bài viết chia sẻ nho nhỏ như vậy trên trang cá nhân.",
  },
  {
    id: 3,
    name: "Hoàng Tuấn Đức",
    image: "https://picsum.photos/181/178",
    khoa: "Sinh viên K44",
    department: "Khoa Vật lý",
    achievement: "Sinh viên 5 tốt cấp Trung ương 02 năm liền 2020, 2021",
    hobby:
      "Đây là một dòng text rất dàiiii iiii iiiii iiiii iiiiii iiiiii iiiiii iiiii iiiiiii iiii iiiiiii iiiii iiii iiiii iiii iiii iiiii iii iiii iiii iiiii iiii iiiii iiiii .",
  },
];
export const posts = [
  {
    id: 1,
    name: "Tác phẩm 1",
    image: "https://picsum.photos/270/360",
  },
  {
    id: 2,
    name: "Tác phẩm 1",
    image: "https://picsum.photos/270/360",
  },
  {
    id: 3,
    name: "Tác phẩm 1",
    image: "https://picsum.photos/270/360",
  },
  {
    id: 4,
    name: "Tác phẩm 1",
    image: "https://picsum.photos/270/360",
  },
  {
    id: 5,
    name: "Tác phẩm 1",
    image: "https://picsum.photos/270/360",
  },
  {
    id: 6,
    name: "Tác phẩm 1",
    image: "https://picsum.photos/270/360",
  },
  {
    id: 7,
    name: "Tác phẩm 1",
    image: "https://picsum.photos/270/360",
  },
  {
    id: 8,
    name: "Tác phẩm 1",
    image: "https://picsum.photos/270/360",
  },
];
export const blogCategory = [
  {
    _id: "blog_category-2",
    slug: "blog_category-2",
    type: 1,
    title: "Những tác phẩm của Bác",
    link: "/nhung-tac-pham-cua-bac",
    description:
      " Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại. Đó là sự nghiệp văn học lớn lao về tầm vóc, phong phú đa dạng về thể loại và đặc sắc về phong cách sáng tạo.",
    blogs: [
      {
        id: "blog-1",
        slug: "blog-1",
        title: "",
        description: "",
        image: "https://picsum.photos/270/360",
      },
      {
        id: "blog-2",
        slug: "blog-2",
        title: "",
        description: "",
        image: "https://picsum.photos/270/360",
      },
      {
        id: "blog-3",
        slug: "blog-3",
        title: "",
        description: "",
        image: "https://picsum.photos/270/360",
      },
      {
        id: "blog-4",
        slug: "blog-4",
        title: "",
        description: "",
        image: "https://picsum.photos/270/360",
      },
      {
        id: "blog-5",
        slug: "blog-5",
        title: "",
        description: "",
        image: "https://picsum.photos/270/360",
      },
    ],
  },
  {
    _id: "blog-category-1",
    slug: "blog-category-1",
    type: 0,
    title: "Viết về Bác Hồ",
    link: "/danh-sach-bai-viet",
    description: "",
    blogs: [
      {
        id: "blog-1",
        slug: "blog-1",
        title: "Tiêu đề bài viết số 01",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
      {
        id: "blog-2",
        slug: "blog-2",
        title: "Tiêu đề bài viết số 02",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
      {
        id: "blog-3",
        slug: "blog-3",
        title: "Tiêu đề bài viết số 03",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
      {
        id: "blog-4",
        slug: "blog-4",
        title: "Tiêu đề bài viết số 04",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
      {
        id: "blog-5",
        slug: "blog-5",
        title: "Tiêu đề bài viết số 05",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
      {
        id: "blog-6",
        slug: "blog-6",
        title: "Tiêu đề bài viết số 06",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
    ],
  },
  {
    _id: "blog-category-1",
    slug: "blog-category-1",
    type: 0,
    title: "Sân khấu kịch nói",
    link: "",
    description: "",
    blogs: [
      {
        id: "blog-1",
        slug: "blog-1",
        title: "Tiêu đề bài viết số 01",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
      {
        id: "blog-2",
        slug: "blog-2",
        title: "Tiêu đề bài viết số 02",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
      {
        id: "blog-3",
        slug: "blog-3",
        title: "Tiêu đề bài viết số 03",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
      {
        id: "blog-4",
        slug: "blog-4",
        title: "Tiêu đề bài viết số 04",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
      {
        id: "blog-5",
        slug: "blog-5",
        title: "Tiêu đề bài viết số 05",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
      {
        id: "blog-6",
        slug: "blog-6",
        title: "Tiêu đề bài viết số 06",
        description:
          "Hồ Chí Minh nhà văn nhà thơ lớn. Sự nghiệp văn học của Người gắn liền với sự nghiệp cứu nước cứu dân. Ở Hồ Chí Minh, văn cũng tức là người. Văn thơ của Người phản ánh tâm hồn cao đẹp và cuộc đời vĩ đại của Người - một cuộc đời trọn đời vì nước, vì dân. Không tự coi mình là nhà văn nhà thơ, nhưng trên thực tế Hồ Chí Minh để lại di sản văn học vô cùng quý giá cho dân tộc và nhân loại...",
        image: "https://picsum.photos/543/361",
      },
    ],
  },
  {
    _id: "blog-category-3",
    slug: "blog-category-3",
    type: 2,
    title: "Ca ngợi Bác Hồ kính yêu",
    description: "",
    link: "",
    blogs: [
      {
        id: "blog-1",
        slug: "blog-1",
        title: "Tên tác phẩm",
        description: "",
        image: "",
        embedId: "JGwWNGJdvx8",
      },
      {
        id: "blog-2",
        slug: "blog-1",
        title: "Tên tác phẩm",
        description: "",
        image: "",
        embedId: "50VNCymT-Cs",
      },
      {
        id: "blog-3",
        slug: "blog-1",
        title: "Tên tác phẩm",
        description: "",
        image: "",
        embedId: "r7qovpFAGrQ",
      },
      {
        id: "blog-4",
        slug: "blog-1",
        title: "Tên tác phẩm",
        description: "",
        image: "",
        embedId: "3AtDnEC4zak",
      },
    ],
  },
];
