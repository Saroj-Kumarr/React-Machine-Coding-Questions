import { useEffect, useRef, useState } from "react";

const STATE = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

export default function Autocomplete() {
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);
  const [status, setStatus] = useState(STATE.LOADING);
  const cache = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(STATE.LOADING);

        if (cache.current[query]) {
          setResults(cache.current[query]);
          setStatus(STATE.SUCCESS);
          console.log("Retriver from the cache");
          return;
        }

        console.log("API Call");
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=10`
        );
        const data = await res.json();
        setStatus(STATE.SUCCESS);
        cache.current[query] = data.products;
        setResults(data.products);
      } catch (error) {
        setStatus(STATE.ERROR + "" + error);
      }
    };

    const timerId = setTimeout(fetchData, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {status === STATE.LOADING && <div>...Loading</div>}
      {status === STATE.ERROR && <div>Error Occured</div>}
      {status === STATE.SUCCESS && (
        <ul>
          {result.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
