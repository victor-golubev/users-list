import { useEffect, useState } from "react";

function useFetchUsers(url) {
  const [data, setData] = useState(() => {
    const users = localStorage.getItem("users");
    try {
      return users ? JSON.parse(users) : null;
    } catch {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState(!data);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!data) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          setError(null);

          const response = await fetch(url);

          if (!response.ok) {
            const text = await response.text();
            console.error("Fetch failed:", text);
            throw new Error("Fetch error: " + response.status);
          }

          const answer = await response.json();
          setData(answer.results);
          localStorage.setItem("users", JSON.stringify(answer.results));
        } catch (error) {
          setError(error);
          setData(null);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [url, data]);

  return { data, isLoading, error };
}

export default useFetchUsers;
