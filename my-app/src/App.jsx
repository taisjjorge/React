import React, { useEffect, useState } from "react";
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'

import "./styles/App.css";

import { NavBar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";

function App() {
  const [news, setNews] = useState([])
  
  useEffect(() => {
    async function loadNews(){
      const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
      const newsData = response.data

      setNews(newsData)
    }
    loadNews()
  }, [])

  return (
    <>
      <NavBar />
      {/* <Counter /> */}
      <section id="articles">
        {news.length === 0 ? (
          <div style={{ 
              height: 400, 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
          }}>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
              wrapperStyle={{ margin: "auto" }}
              wrapperClass="loader"
            />
          </div>
        ) : news.map((article, index) => {
          return (
            <Article 
              key={index}
              title={article.title}
              provider={article.newsSite}
              description={article.summary}
              thumbnail={article.imageUrl}
            />
        )})}
      </section>
    </>
  );
}

export default App;
