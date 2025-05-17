import { useEffect, useState } from "react";
import axios from "axios";

const InfinityScroll = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async () => {
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=5`
      );
      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
    } catch (error) {
      console.error("Failed to fetch photos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 300 &&
      !loading
    ) {
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  useEffect(() => {
    if (loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.download_url}
          alt={photo.author}
          style={{ width: "200px", height: "200px" }}
        />
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfinityScroll;
