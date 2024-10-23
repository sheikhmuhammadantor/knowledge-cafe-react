import { useState, useEffect } from "react";
import { Blogs, Bookmarks, Header } from "./components/export";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Blog.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <section className="container mx-auto px-2">
        <Header></Header>

      </section>
    </>
  );
}

export default App;