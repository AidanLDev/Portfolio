import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';

import BlogCard from "components/BlogCard/BlogCard";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import * as blogData from "data/Blog/blogData";

import styles from "./Style.module.scss";

const BlogNav = () => {
  const [filterValue, setFilterValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const weatherRequestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=231273878f22174e32dccfe816682568";

  const handleInputChange = event => setFilterValue(event.target.value);

  useEffect(() => {
    // 231273878f22174e32dccfe816682568
    fetch(weatherRequestUrl)
      .then(results => results.json())
      .then(data => {
        console.log(data);
        setWeatherData(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.rightSidebar}>
        <div className={styles.searchBar}>
          <TextField
            value={filterValue}
            onChange={handleInputChange}
            label="Search Blogs"
            style={{margin: 'auto'}}
          />
        </div>
        <div className={styles.weatherWidget}>
          <WeatherWidget
            weatherData={weatherData}
            className={styles.weatherWidget}
          />
        </div>
      </div>
      <div className={styles.mainContainer}>
        <h1>Blog Posts</h1>
        {blogData.blogs.map(blog => {
          if (filterValue === "" || RegExp(filterValue, "i").test(blog.title)) {
            return (
              <BlogCard
                key={blog.title}
                title={blog.title}
                description={blog.description}
                route={blog.route}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogNav;
