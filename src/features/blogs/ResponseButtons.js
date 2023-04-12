import {useDispatch} from "react-redux"
import { responseAdded } from "./blogsSlice";

const responseEmoji = {
  like: "👍",
  unlike: "👎",
};

const ResponseButtons = ({blog}) => {
  const dispatch = useDispatch()
  const responseButtons = Object.entries(responseEmoji).map(([name, emoji]) => {
    return (
      <button 
      key={name} 
      type="button" 
      className="btn btn-light mx-2" 
      onClick={() => 
        dispatch(responseAdded({ blogId: blog.id, response: name}))}>
        {emoji} {blog.response[name]}
      </button>
    );
  });

  return <div>{responseButtons}</div>;
};
export default ResponseButtons;
