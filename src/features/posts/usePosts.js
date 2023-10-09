import { useEffect, useState } from "react";
import postService from "../../services/apiPosts";
import { PAGE_SIZE } from "../../utils/constants";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const size = PAGE_SIZE;
  const getAllPosts = async () => {
    const response = await postService.all();
    if (!response) {
      return false;
    }
    setPosts(response.slice(0, size));
    setIsLoading(false);
  };

  useEffect(function () {
    getAllPosts();
  }, []);

  return { posts, isLoading };
}
