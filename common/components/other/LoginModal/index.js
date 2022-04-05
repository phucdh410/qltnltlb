import React, { useCallback, useState } from "react";
import { Button, Modal, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { onUserLogin } from "store/actions/authAction";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  LoginInput: {
    width: "100%",
    fontSize: "20px",
    marginBottom: "20px",
    "& .MuiInputLabel-root": {
      fontSize: "inherit",
    },
    "& .MuiOutlinedInput-root": {
      background: theme.palette.color.white,
      fontSize: "inherit",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "red",
    },
  },
}));
const validationSchema = yup.object({
  username: yup
    .string("Vui lòng nhập vào tên đăng nhập")
    .required("Vui lòng nhập vào tên đăng nhập")
    .min(5, "Tên đăng nhập không hợp lệ"),
  password: yup
    .string("Vui lòng nhập vào mật khẩu")
    .required("Vui lòng nhập vào mật khẩu"),
});

let source = axios.CancelToken.source;

const LoginModal = ({ open, onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // Account test
  // username: "admin"    // username: "44.01.103.004"
  // password: "12345"    // password: "12345"
  // fcmToken: "12345"    // fcmToken: "12345"
  const handleLogin = useCallback(async (values) => {
    setLoading(true);
    const data = { ...values, fcmToken: "12345" };
    const response = await dispatch(onUserLogin(data, source));
    if (response === false) {
      formik.setErrors({
        username: "Sai tên đăng nhập hoặc mật khẩu",
        password: "Sai tên đăng nhập hoặc mật khẩu",
      });
    } else {
      formik.resetForm();
      toast.success("Đăng nhập thành công");
      onClose();
    }
    setLoading(false);
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: () => handleLogin(formik.values),
    onChange: () => setWrongAcc(false),
  });
  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={formik.handleSubmit} className="login">
        <TextField
          type="text"
          label="Tên đăng nhập"
          id="username"
          name="username"
          className={classes.LoginInput}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          type="password"
          label="Mật khẩu"
          id="password"
          name="password"
          className={classes.LoginInput}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button disabled={loading} type="submit">
          Đăng nhập
        </Button>
      </form>
    </Modal>
  );
};

export default LoginModal;
