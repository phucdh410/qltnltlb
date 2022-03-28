import React, { useState } from "react";
import { Article, Print } from "@mui/icons-material";
import axios from "axios";
import fileDownload from "js-file-download";
import {
  DropdownInput,
  EventButton,
  FormContainer,
  FormItem,
  Label,
  TextInput,
  TodoItem,
} from "../components";

const todoListDemo = [
  {
    id: "id_1",
    status: 0,
    finish: false,
  },
  {
    id: "id_2",
    status: 2,
    finish: false,
  },
  {
    id: "id_3",
    status: 3,
    finish: true,
  },
];

const KetQua = ({ student }) => {
  const { fullname, major, student_code } = student;
  const [todoList, setTodoList] = useState([{ finish: false }]);
  const onClick = (index) => {
    if (index === 1 || index === 2) {
      const deletedList = todoList.filter((e, i) => i !== index);
      setTodoList(deletedList);
    } else {
      if (todoList.length < 3) {
        setTodoList([...todoList, {}]);
      } else {
        alert("Số lượng phần việc tối đa là 3");
      }
    }
  };
  const finalResult = todoList.reduce(
    (prev, cur) => (cur.finish === true ? ++prev : prev),
    0
  );
  const finalResultDemo = todoListDemo.reduce(
    (prev, cur) => (cur.finish === true ? ++prev : prev),
    0
  );

  const onPrint = () => {
    console.log("In giấy chứng nhận");
  };
  const download = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };
  const onDownload = () => {
    download("https://picsum.photos/983/370", "giaychungnhan.png");
  };

  return (
    <FormContainer title="Đăng ký phần việc làm theo lời Bác">
      <DropdownInput label="Năm" />
      <TextInput label="Họ và tên" defaultValue={fullname} readOnly={true} />
      <TextInput label="Đơn vị" defaultValue={major} readOnly={true} />
      <TextInput label="MSSV" defaultValue={student_code} readOnly={true} />

      {todoListDemo.map((todoItem, index) => (
        <TodoItem
          key={index}
          index={index}
          onClick={() => onClick(index)}
          formType={2}
          status={todoItem.status}
        />
      ))}
      <FormItem>
        <div className="col-12">
          <Label className="form-label" sx={{ color: "#797A7E" }}>
            {`Đã hoàn thành ${finalResultDemo} / ${todoListDemo.length} phần việc đã đăng ký`}
          </Label>
        </div>
      </FormItem>

      <img
        id="giay-chung-nhan"
        src="https://picsum.photos/983/370"
        alt="image"
        height={370}
        width={983}
      />
      <div
        className="form-button-group"
        style={{ textAlign: "right", paddingTop: "20px" }}
      >
        <EventButton
          label="In"
          icon={<Print />}
          onClick={onPrint}
          htmlFor="giay-chung-nhan"
        />
        <EventButton
          label="Tải xuống"
          icon={<Article />}
          onClick={onDownload}
          htmlFor="giay-chung-nhan"
        />
      </div>
    </FormContainer>
  );
};

export default KetQua;
