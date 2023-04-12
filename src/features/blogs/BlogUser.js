import {useSelector} from "react-redux"
import { selectAllUsers } from "../users/usersSlice";

const BlogUser = ({userId}) => {
  const users = useSelector(selectAllUsers)

  const user = users.find((user) => user.id === userId)
  return (
    <span>
      by <mark style={{ fontSize: "16px", fontWeight: "bold" }}>{user ? user.name : "Unknown User"}</mark>
    </span>
  );
};
export default BlogUser;
