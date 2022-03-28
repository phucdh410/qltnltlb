import React, { useState } from "react";
import {
  DropdownInput,
  FormContainer,
  SubmitButton,
  TextInput,
  TodoItem,
} from "../components";

const DangKy = ({ student }) => {
  const { fullname, major, student_code } = student;
  const [todoList, setTodoList] = useState([{}]);
  const onClick = (index) => {
    if (index === 1 || index === 2) {
      const deletedList = todoList.filter((e, i) => i !== index);
      setTodoList(deletedList);
    } else {
      if (todoList.length < 3) {
        setTodoList([...todoList, {}]);
      } else {
        alert("Bạn chỉ có thể đăng ký tối đa 3 phần việc");
      }
    }
  };
  return (
    <FormContainer title="Đăng ký phần việc làm theo lời Bác">
      <DropdownInput label="Năm" />
      <TextInput label="Họ và tên" defaultValue={fullname} readOnly={true} />
      <TextInput label="Đơn vị" defaultValue={major} readOnly={true} />
      <TextInput label="MSSV" defaultValue={student_code} readOnly={true} />
      {todoList.map((todoItem, index) => (
        <TodoItem key={index} index={index} onClick={() => onClick(index)} />
      ))}
      <SubmitButton label="Đăng ký" />
    </FormContainer>
  );
};

export default DangKy;
