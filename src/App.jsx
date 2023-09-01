import React, { useState, useEffect } from "react";
import './index.css';
import Navbar from "./components/Navbar";
import Filter from "./components/filter";
import Card from "./components/card";

function App() {
  const [articles, setArticles] = useState([]);
  const [type, setType] = useState("apple")

  const url = `https://newsapi.org/v2/everything?q=${type}&from=2023-08-31&to=2023-08-31&sortBy=popularity&apiKey=634b80de6ead48908c26b6843627ecc6`

  useEffect(() => {
    const getData = async () => {
      const request = await fetch(url);
      const response = await request.json();
      setArticles(response.articles);
    };
    getData();
  }, []);
  const getInputData = (eee) => {
    setType(eee)
  }
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Filter sendFunc={getInputData}/>
        </div>
      </div>
      <div className="devider">

      </div>
      <div className="main-section">
  {articles.map((all, index) => {
    // Check if 'title' and 'description' exist and are not null/undefined
    const slicedTitle = all.title ? all.title.slice(0, 30) : "";
    const slicedDescription = all.description ? all.description.slice(0, 100) : "";
    return (
      <div className="rowWise" key={index}>
        <Card
          name={all.source.name}
          title={slicedTitle}
          description={slicedDescription}
          url={all.url}
          imageURL={all.urlToImage}
          publishDate={all.publishedAt}
        />
      </div>
    );
  })}
</div>

    </>
  )
}

export default App
