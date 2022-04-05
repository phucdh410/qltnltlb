import Image from "next/image";
import PropTypes from "prop-types";

const styles = {
  background: "none",
  border: "none",
  color: "#F1693E",
  fontWeight: 700,
  textDecorationLine: "underline",
  textDecorationThickness: "3px",
};

const FileItem = ({ src, name, onDelete }) => {
  return (
    <div className="file-item" style={{ padding: "20px 15px" }}>
      <Image src={src} alt={name} height={40} width={40} />
      <p
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: "100px",
        }}
      >
        {name}
      </p>
      <button onClick={onDelete} style={styles} type="button">
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
