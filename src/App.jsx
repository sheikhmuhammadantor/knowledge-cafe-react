import { useState, useEffect } from "react";
import { Blogs, Bookmarks, Header } from "./components/export";

function App() {
  const [data, setData] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handelBookmark = (bookmark) => {
    const newBookmarks = [...bookmarks, bookmark]
    setBookmarks(newBookmarks);
  }

  const handelRead = (bookmark) => {
    const { id, readingTime } = bookmark;
    const time = readTime + readingTime;
    setReadTime(time);
    // Remove From Bookmark;
    const filterBookmarks = bookmarks.filter((bookmark) => id !== bookmark.id);
    setBookmarks(filterBookmarks);
  }


  useEffect(() => {
    fetch("Blog.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <section className="container mx-auto px-2">
        <Header></Header>
        <div className="divider"></div>
        {/* Main Body Section */}
        <section className="md:flex justify-center">
          {/* Blogs Section */}
          <Blogs data={data} handelBookmark={handelBookmark} handelRead={handelRead}></Blogs>
          {/* Bookmarks Section */}
          <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
        </section>
      </section>
    </>
  );
}

export default App;
