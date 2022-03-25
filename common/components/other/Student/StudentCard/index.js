import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const NewCard = styled(Card)(({ theme }) => ({
  marginBottom: "20px",
  textAlign: "center",
  boxShadow: "none",
  backgroundColor: "unset",
  color: theme.palette.color.darkPurple,
  "& .MuiCardContent-root": {
    padding: "8px",
  },
}));
const Ten = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "28px",
  lineHeight: 1,
}));
const Khoa = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontSize: "26px",
  lineHeight: 1,
}));

const StudentCard = ({ id, username, fullname, department, avatar }) => {
  const router = useRouter();
  const onClick = () => {
    // router.push(router.route + slug);
    router.push(router.route + "/" + id);
  };

  return (
    <NewCard className="student-card-container">
      <CardActionArea onClick={onClick}>
        <div className="card-image">
          <img src={avatar} alt={fullname} />
        </div>
        <CardContent>
          <Ten className="card-name">{fullname}</Ten>
          <Khoa className="card-department">{department}</Khoa>
        </CardContent>
      </CardActionArea>
    </NewCard>
  );
};

export default StudentCard;

StudentCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  username: PropTypes.string,
  fullname: PropTypes.string,
  department: PropTypes.string,
  avatar: PropTypes.string,
};
StudentCard.defaultProps = {
  id: "student-1",
  username: "43.01.104.001",
  fullname: "Test User 1",
  department: "CNTT",
  avatar: "https://picsum.photos/400/500/",
};
