import axios from "../axiosInterceptor";

async function all() {
  try {
    const res = await axios("/posts");
    return res.data;
  } catch (e) {
    return false;
  }
}

const postService = {
  all,
};

export default postService;
