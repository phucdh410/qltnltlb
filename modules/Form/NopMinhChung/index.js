import React, { useState } from "react";
import {
  DropdownInput,
  FormContainer,
  SubmitButton,
  TextInput,
  TodoItem,
} from "../components";

const NopMinhChung = ({ student }) => {
  const { fullname, major, student_code } = student;
  const [todoList, setTodoList] = useState([{}]);
  const onClick = () => {
    setTodoList([...todoList, {}]);
  };
  return (
    <FormContainer title="Minh chứng phần việc làm theo lời Bác">
      <DropdownInput label="Năm" />
      <TextInput label="Họ và tên" defaultValue={fullname} readOnly={true} />
      <TextInput label="Đơn vị" defaultValue={major} readOnly={true} />
      <TextInput label="MSSV" defaultValue={student_code} readOnly={true} />
      {todoList.map((todoItem, index) => (
        <TodoItem key={index} index={index} onClick={onClick} formType={1} />
      ))}
      <SubmitButton label="Nộp" />
    </FormContainer>
  );
};

export default NopMinhChung;
