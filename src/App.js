import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getNewQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const data = response.data;
      console.log(response);
      console.log(data);
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div className=" center">
      <div id="quote-box" className="q">
        <div id="text">{quote}</div>
        <div id="author">- {author}</div>
        <button id="new-quote" className="ms-1" onClick={getNewQuote}>
          New Quote
        </button>
        <a id="tweet-quote" className="btn" href="#" onClick={tweetQuote}>
          Tweet Quote
        </a>
      </div>
    </div>
  );
};

export default App;
