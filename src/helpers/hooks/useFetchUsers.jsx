import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const savedUsers = localStorage.getItem("users");
        const parsedUsers = savedUsers ? JSON.parse(savedUsers) : [];

        if (parsedUsers && parsedUsers.length > 0) {
          setUsers(parsedUsers);
          setIsLoading(false);
          return;
        }

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Fetch error: " + response.status);
        }

        const answer = await response.json();
        const newUsers = answer.results || [];

        setUsers(newUsers);
        localStorage.setItem("users", JSON.stringify(newUsers));
      } catch (error) {
        setError(error);
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, setUsers, isLoading, error };
}

export default useFetchUsers;
