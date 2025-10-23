import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const useClerkToken = () => {
  const { getToken, isLoaded } = useAuth();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      if (isLoaded) {
        const t = await getToken();
        setToken(t);
      }
    };
    fetchToken();
  }, [isLoaded, getToken]);

  console.log(token);
  return token;
};

export default useClerkToken;
