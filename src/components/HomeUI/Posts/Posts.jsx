import React from "react";
import Post from "../Post/Post";

import { PostData } from "../../../Data/PostData";

const Posts = () => {
  return(
  <div className="flex flex-col gap-4">
    {PostData.map((post, id)=>{
      return <Post data={post} id={id} />
    })}
  </div>
  );
};

export default Posts;
