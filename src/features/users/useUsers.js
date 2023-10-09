import { useEffect, useState } from "react";
import userService from "../../services/apiUsers";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllUsers = async () => {
    const response = await userService.all();
    if (!response) {
      return false;
    }
    setUsers(response);
    setIsLoading(false);
  };

  useEffect(function () {
    getAllUsers();
  }, []);

  return { users, isLoading };
}
