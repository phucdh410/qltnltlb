import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormItem, Label, UploadButton, FileItem } from "../";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  DropFileInput: {
    minHeight: "140px",
    width: "100%",
    border: `2px solid ${theme.palette.color.pink}`,
    borderRadius: "5px",
    "&.dragover": {
      borderColor: "blue",
      borderStyle: "dashed",
      "& .drag-note": {
        opacity: 1,
      },
    },
  },
}));

const maxSize = 10485760; // 10Mb dung lượng file tối đa upload cho 1 phần việc
const UploadInput = ({ setFieldValue, name }) => {
  const classes = useStyles();
  const [filesList, setFilesList] = useState([]);

  const dragzoneRef = useRef(null);

  useEffect(() => {
    setFieldValue(name, filesList);
  }, [filesList]);

  const onDragEnter = (e) => {
    console.log("enter");
    e.preventDefault();
    dragzoneRef.current.classList.add("dragover");
  };
  const onDragLeave = (e) => {
    console.log("leave");
    e.preventDefault();
    dragzoneRef.current.classList.remove("dragover");
  };
  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onDrop = (e) => {
    console.log("drop");
    e.preventDefault();
    dragzoneRef.current.classList.remove("dragover");
    if (e.dataTransfer.files) {
      const newFiles = Object.values(e.dataTransfer.files);
      const updatedList = [...filesList, ...newFiles];
      const sum = updatedList.reduce((prev, cur) => prev + cur.size, 0);
      if (sum > maxSize) {
        toast.error("Dung lượng file tối đa cho mỗi phần việc là 10Mb");
      } else {
        setFilesList(updatedList);
      }
    }
  };
  const onFileChange = (e) => {
    const newFiles = Object.values(e.target.files);
    if (newFiles) {
      const updatedList = [...filesList, ...newFiles];
      const sum = updatedList.reduce((prev, cur) => prev + cur.size, 0);
      if (sum > maxSize) {
        toast.error("Dung lượng file tối đa cho mỗi phần việc là 10Mb");
      } else {
        setFilesList(updatedList);
      }
    }
  };
  const onDelete = (index) => {
    const updatedList = filesList.filter((e, i) => i !== index);
    setFilesList(updatedList);
  };
  return (
    <FormItem>
      <div className="col-12">
        <div style={{ display: "flex" }}>
          <Label>Tải lên</Label>
          <UploadButton onFileAdd={onFileChange} />
        </div>
      </div>
      <div className="col-12">
        <Box
          ref={dragzoneRef}
          className={classes.DropFileInput}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              overflow: "auto",
            }}
          >
            {filesList.length > 0 &&
              filesList.map((e, i) => (
                <FileItem key={i} name={e.name} onDelete={() => onDelete(i)} />
                // <div key={i}>{e.name.slice(e.name.lastIndexOf(".") + 1)}</div>
              ))}
          </div>
        </Box>
      </div>
    </FormItem>
  );
};

export default UploadInput;
