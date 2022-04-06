import React, { useCallback, useEffect } from "react";
import {
  DropdownInput,
  FormContainer,
  SubmitButton,
  TextInput,
  TodoItem,
} from "../components";
import * as yup from "yup";
import { useFormik } from "formik";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAchievement } from "store/actions/achievementAction";

const years = [];
for (let i = 2022; i <= 2072; i++) {
  years.push({ _id: i, name: `${i}`, value: i });
}
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
        files: yup.array(),
      })
    )
    .required(),
});

const NopMinhChung = ({ student }) => {
  const dispatch = useDispatch();

  const { fullname, majorName, username } = student;
  const { achievementFields, achievements } = useSelector(
    (state) => ({
      achievementFields: state.achievementField.achievementFields,
      achievements: state.achievement.achievements,
    }),
    shallowEqual
  );

  const formik = useFormik({
    initialValues: {
      year: 2022,
      dataJson: [],
    },
    validationSchema,
    onSubmit: () => console.log(formik.values),
  });
  const { setFieldValue } = formik;
  const onGetAchievement = useCallback(() => {
    dispatch(getAchievement(formik.values.year));
  }, [dispatch, formik.values.year]);

  useEffect(() => {
    onGetAchievement();
  }, [formik.values.year, onGetAchievement]);

  useEffect(() => {
    if (achievements) {
      setFieldValue("dataJson", achievements);
    }
  }, [achievements, setFieldValue]);

  return (
    <FormContainer title="Minh chứng phần việc làm theo lời Bác">
      <form onSubmit={formik.handleSubmit}>
        <DropdownInput
          label="Năm"
          name="year"
          id="year"
          type="year"
          options={years}
          value={formik.values.year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.touched.year && Boolean(formik.errors.year)}
          helperText={formik.touched.year && formik.errors.year}
        />
        <TextInput label="Họ và tên" defaultValue={fullname} readOnly={true} />
        <TextInput label="Đơn vị" defaultValue={majorName} readOnly={true} />
        <TextInput label="MSSV" defaultValue={username} readOnly={true} />
        {formik.values.dataJson.length > 0 ? (
          formik.values.dataJson.map((todoItem, index) => (
            <TodoItem
              key={index}
              index={index}
              formType={1}
              achievementFields={achievementFields}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              idFieldId={`dataJson.${index}.fieldId`}
              nameFieldId={`dataJson.${index}.fieldId`}
              valueFieldId={formik.values.dataJson[index].fieldId}
              idContent={`dataJson.${index}.content`}
              nameContent={`dataJson.${index}.content`}
              valueContent={formik.values.dataJson[index].content}
              idFiles={`dataJson.${index}.files`}
              nameFiles={`dataJson.${index}.files`}
              valueFiles={formik.values.dataJson[index].files}
              setFieldValue={setFieldValue}
              dataJson={formik.values.dataJson}
              achievementId={todoItem._id}
            />
          ))
        ) : (
          <h1>Năm này bạn chưa đăng ký phần việc</h1>
        )}
        <SubmitButton
          disabled={formik.values.dataJson.length === 0}
          type="submit"
          label="Nộp"
        />
      </form>
    </FormContainer>
  );
};

export default NopMinhChung;
