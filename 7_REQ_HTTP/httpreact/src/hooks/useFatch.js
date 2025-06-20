import { useState, useEffect } from "react";

//4 - custom hook
export const useFatch = (url) => {
  const [data, setData] = useState(null);
  //5 - refatorando POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFatch, setCallFatch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    }
    if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    const fectchData = async () => {
      //6 - Loading
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error.message);
        setError("Houve algum erro ao carregar os dados!");
      }
      setLoading(false);
    };
    fectchData();
  }, [url, callFatch]);

  //5 - reftaorando POST
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fechOptions = [url, config];
        const res = await fetch(...fechOptions);
        const json = await res.json();
        setCallFatch(json);
      }
      if (method === "DELETE") {
        let fechOptions = [`${url}/${itemId}`, config];
        const res = await fetch(...fechOptions);
        const json = await res.json();
        setCallFatch(json);
      }
    };
    httpRequest();
  }, [config, itemId, method, url]);

  return { data, httpConfig, loading, error };
};
