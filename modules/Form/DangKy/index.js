import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  DropdownInput,
  FormContainer,
  SubmitButton,
  TextInput,
  TodoItem,
} from "../components";
import { toast } from "react-toastify";
import { createAchievement } from "store/actions/achievementAction";

const validationSchema = yup.object({
  year: yup
    .number("Nhập vào năm bạn cần đăng ký bằng số")
    .required("Vui lòng chọn năm")
    .min(2022, "Vui lòng chọn năm từ 2022 đến 2072")
    .max(2072, "Vui lòng chọn năm từ 2022 đến 2072"),
  dataJson: yup
    .array()
    .of(
      yup.object().shape({
        fieldId: yup.string().required(),
        content: yup.string().required("Vui lòng nhập nội dung đăng ký"),
      })
    )
    .required(),
});

const years = [];
for (let i = 2022; i <= 2072; i++) {
  years.push({ _id: i, name: `${i}`, value: i });
}

const DangKy = ({ student }) => {
  const dispatch = useDispatch();
  const { fullname, majorName, username } = student;
  const { achievementFields } = useSelector(
    (state) => ({
      achievementFields: state.achievementField.achievementFields,
    }),
    shallowEqual
  );
  const formik = useFormik({
    initialValues: {
      year: 2022,
      dataJson: [{ fieldId: achievementFields[0]._id, content: "" }],
    },
    validationSchema,
    onSubmit: () => {
      console.log(formik.values);
      dispatch(createAchievement(formik.values));
    },
  });

  const { setFieldValue } = formik;
  // Xử lý click button +
  const onClick = (e, index) => {
    e.preventDefault();
    // Nếu là phần việc thứ 2 hoặc 3 thì sẽ xóa
    if (index === 1 || index === 2) {
      const deletedList = formik.values.dataJson.filter((e, i) => i !== index);
      setFieldValue("dataJson", deletedList);
    } else {
      // Nếu là phần việc đầu tiên->Kiểm tra chưa đạt tối đa(3) thì cho thêm
      if (formik.values.dataJson.length < 3) {
        setFieldValue("dataJson", [
          ...formik.values.dataJson,
          { fieldId: achievementFields[0]._id, content: "" },
        ]);
      } else {
        toast.error("Bạn chỉ có thể đăng ký tối đa 3 phần việc");
      }
    }
  };
  return (
    <FormContainer title="Đăng ký phần việc làm theo lời Bác">
      <form onSubmit={formik.handleSubmit}>
        <DropdownInput
          type="year"
          options={years}
          label="Năm"
          name="year"
          id="year"
          value={formik.values.year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.touched.year && Boolean(formik.errors.year)}
          helperText={formik.touched.year && formik.errors.year}
        />
        <TextInput label="Họ và tên" defaultValue={fullname} readOnly={true} />
        <TextInput label="Đơn vị" defaultValue={majorName} readOnly={true} />
        <TextInput label="MSSV" defaultValue={username} readOnly={true} />
        {formik.values.dataJson.map((todoItem, index) => (
          <TodoItem
            key={index}
            index={index}
            achievementFields={achievementFields}
            onClick={(e) => onClick(e, index)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            idFieldId={`dataJson.${index}.fieldId`}
            nameFieldId={`dataJson.${index}.fieldId`}
            valueFieldId={formik.values.dataJson[index].fieldId}
            idContent={`dataJson.${index}.content`}
            nameContent={`dataJson.${index}.content`}
            valueContent={formik.values.dataJson[index].content}
            errors={
              formik.touched.dataJson &&
              formik.errors.dataJson &&
              formik.touched.dataJson[index]?.content &&
              Boolean(formik.errors.dataJson[index]?.content)
            }
            helperText={
              formik.touched.dataJson &&
              formik.errors.dataJson &&
              formik.touched.dataJson[index]?.content &&
              formik.errors.dataJson[index]?.content
            }
          />
        ))}
        <SubmitButton type="submit" label="Đăng ký" />
      </form>
    </FormContainer>
  );
};

export default DangKy;
