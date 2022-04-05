import React, { useEffect } from "react";
import { Article, Print } from "@mui/icons-material";
import axios from "axios";
import fileDownload from "js-file-download";
import {
  DropdownInput,
  EventButton,
  FormContainer,
  FormItem,
  Label,
  NumberInput,
  TextInput,
  TodoItem,
} from "../components";
import * as yup from "yup";
import { useFormik } from "formik";
import { shallowEqual, useSelector } from "react-redux";

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
      })
    )
    .required(),
});

const data = [
  {
    year: 2022,
    dataJson: [
      {
        fieldId: "623d92e8647f1b42e0bdff7e",
        content: "Nội dung đã đăng ký 1",
        status: 0,
        finish: false,
      },
      {
        fieldId: "624686c94144742ebc9736f4",
        content: "Nội dung đã đăng ký 2",
        status: 3,
        finish: true,
      },
    ],
  },
  {
    year: 2023,
    dataJson: [
      {
        fieldId: "623d92e8647f1b42e0bdff7e",
        content: "Nội dung đã đăng ký 1",
        status: 3,
        finish: true,
      },
      {
        fieldId: "624686c94144742ebc9736f4",
        content: "Nội dung đã đăng ký 2",
        status: 1,
        finish: false,
      },
      {
        fieldId: "623d92e8647f1b42e0bdff7e",
        content: "Nội dung đã đăng ký 3",
        status: 2,
        finish: false,
      },
    ],
  },
];

const KetQua = ({ student }) => {
  const { fullname, majorName, username } = student;
  const { achievementFields } = useSelector(
    (state) => ({
      achievementFields: state.achievementField.achievementFields,
    }),
    shallowEqual
  );
  const formik = useFormik({
    initialValues: {
      year: data[0].year,
      dataJson: data[0].dataJson,
    },
    validationSchema,
    onSubmit: () => console.log(formik.values),
  });
  const { setFieldValue } = formik;
  useEffect(() => {
    const newValue = data.reduce(
      (prev, cur) => (cur.year === formik.values.year ? cur.dataJson : prev),
      []
    );
    setFieldValue("dataJson", newValue);
  }, [formik.values.year]);

  const finalResultDemo = formik.values.dataJson.reduce(
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
    <FormContainer title="Kết quả phần việc làm theo lời Bác">
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
            formType={2}
            status={todoItem.status}
            achievementFields={achievementFields}
            onChange={formik.handleChange}
            idFieldId={`dataJson.${index}.fieldId`}
            nameFieldId={`dataJson.${index}.fieldId`}
            valueFieldId={formik.values.dataJson[index].fieldId}
            idContent={`dataJson.${index}.content`}
            nameContent={`dataJson.${index}.content`}
            valueContent={formik.values.dataJson[index].content}
          />
        ))
      ) : (
        <h1>Năm này bạn chưa đăng ký phần việc</h1>
      )}
      <FormItem>
        <div className="col-12">
          <Label className="form-label" sx={{ color: "#797A7E" }}>
            {`Đã hoàn thành ${finalResultDemo} / ${formik.values.dataJson.length} phần việc đã đăng ký`}
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
