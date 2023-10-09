import axios from "../axiosInterceptor";

async function all() {
  try {
    const res = await axios("/users");
    return res.data;
  } catch (e) {
    return false;
  }
}

const userService = {
  all,
};

export default userService;
