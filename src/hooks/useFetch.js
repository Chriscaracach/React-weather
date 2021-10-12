import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          let err = new Error("Error en la petición Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "ocurrió un error";
          throw err;
        }

        let data = res.json();

        setData(data);
        setIsPending(false);
        setError({ err: false });
      } catch (e) {
        setIsPending(true);
        setError(e);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
