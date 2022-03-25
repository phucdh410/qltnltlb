import React from "react";
import { PaginationBar } from "../../control";
import StudentCard from "../Student/StudentCard";

const students = [
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
];

// Truyền danh sách sinh viên
const DanhSachKyYeu = ({}) => {
  return (
    <div className="section-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
              {students.map((student, i) => (
                <div
                  key={student.id}
                  className="col-12 col-md-6 col-lg-4 col-xxl-3"
                >
                  <StudentCard
                    id={student.id}
                    username={student.username}
                    fullname={student.fullname}
                    department={student.department}
                    avatar={student.avatar}
                  />
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

export default DanhSachKyYeu;
