import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

/*
 TODO: useEffect hooks

 useEffect jab component Load hota hai tab woh uska kaam karta hai

 The useEffect hook is a function provided by React that allows you to perform side effects in function components. Side effects could be data fetching, subscriptions, or manually changing the DOM, among other things.

In the provided code, useEffect is used to fetch data from the GitHub API. The function passed to useEffect will run after the render is committed to the screen.

The empty array [] as the second argument to useEffect means that the effect will only run once, similar to componentDidMount in class components. If the second argument was omitted, the effect would run after every render.
*/

/*
TODO: What is Loader in Router-DOM
loader, which is a function that returns a dynamic import of a component. This is used for code splitting, allowing you to load components only when they are needed, reducing the initial load time of your app.
*/ s;

function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/shubham-karale")
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <div className="flex justify-center items-center mt-2">
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </div>
  );
}

export default Github;

// TODO: These is the Loader function which is used in the Router DOM
// What Loader DO ? => When you just hover on the links it automatically starts fetching data and stored it in caches so that when you click on the link it will load faster

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shubham-karale");
  return response.json();
};
