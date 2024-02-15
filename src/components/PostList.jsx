import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, displayposts } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Welcome post={postList} serverpost={displayposts}></Welcome>
    </>
  );
};

export default PostList;