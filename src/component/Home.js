import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import Select from 'react-select'

function App() {
  const [news, setNews] = useState([]);

console.log(" Sahal : ",news);
 console.log(news);
  useEffect(() => {
    const getArticles = async () => {
            const response = await axios.get(`
            https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2b6fe601e65246cc88b85fdbb3792005`)
            setNews(response.data.articles)
             }
   
            
        

        getArticles()
       
  }, []);

  const options = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: 'Algeria', label: "Algeria" },
    { value: "Cambodia", label: "Cambodia" },
    {value: "India" , label : "India"}
  ]
  
  return (
    <div>
      <div className="drop-down">
      
      <Select className="menu" placeholder="Select..." options={options} />
      </div>
      <div className="container mt-5">
        <div className="row">
          {news.map((value, index) => {
            return (
              <div key={index} className="col-4">
              
                <div
                  className="card mt-4"
                  style={{ width: "23rem", lineHeight: "normal", }}
                >
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
              
                  <p className="name">{value.source.name}</p>
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
