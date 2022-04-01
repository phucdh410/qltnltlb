import { PaginationBar } from "common/components/control";
import React from "react";

const listBooks = [
  {
    _id: 1,
    title: "Sách 1",
    image: "https://picsum.photos/300/400",
  },
  {
    _id: 2,
    title: "Sách 2",
    image: "https://picsum.photos/300/400",
  },
  {
    _id: 3,
    title: "Sách 3",
    image: "https://picsum.photos/300/400",
  },
  {
    _id: 4,
    title: "Sách 4",
    image: "https://picsum.photos/300/400",
  },
  {
    _id: 5,
    title: "Sách 5",
    image: "https://picsum.photos/300/400",
  },
  {
    _id: 6,
    title: "Sách 6",
    image: "https://picsum.photos/300/400",
  },
  {
    _id: 7,
    title: "Sách 7",
    image: "https://picsum.photos/300/400",
  },
  {
    _id: 8,
    title: "Sách 8",
    image: "https://picsum.photos/300/400",
  },
  {
    _id: 9,
    title: "Sách 9",
    image: "https://picsum.photos/300/400",
  },
];
const BlogsTypeImage = ({ title, list }) => {
  return (
    <div className="section-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="primary-title">
              <p>{title}</p>
            </div>
            <div className="row book-container">
              {listBooks.map((book) => (
                <div
                  key={book._id}
                  className="col-12 col-md-6 col-lg-4 col-xxl-3"
                >
                  <div className="book-item">
                    <div className="book-thumb">
                      <img src={book.image} alt={book.title} />
                    </div>
                  </div>
                </div>
              ))}
              <PaginationBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsTypeImage;
