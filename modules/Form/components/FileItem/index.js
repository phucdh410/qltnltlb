import Image from "next/image";
import PropTypes from "prop-types";

const styles = {
  background: "none",
  border: "none",
  color: "#F1693E",
  fontSize: "24px",
  lineHeight: "27.5px",
  fontWeight: 700,
  textDecorationLine: "underline",
  textDecorationThickness: "3px",
};

const FileItem = ({ src, name, onDelete }) => {
  return (
    <div className="file-item">
      <div className="file-item__icon">
        <Image src={src} alt={name} layout="fill" />
      </div>
      <p className="file-item__name">{name}</p>
      <button className="file-item__button" onClick={onDelete} type="button">
        Xóa
      </button>
    </div>
  );
};
export default FileItem;
FileItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};
FileItem.defaultProps = {
  src: "/assets/images/global/folder.webp",
  name: "File",
};
