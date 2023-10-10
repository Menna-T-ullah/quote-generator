import "./App.css";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from 'react-share';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <SocialIcon
          network="twitter"
          bgColor="#262834"
          fgColor="#56cbdb"
          className="social"
          onClick={() =>
            window.open(
              `https://twitter.com/compose/tweet?text=${quote.content} - ${quote.author}`
            )
          }
        />
        <SocialIcon
          network="whatsapp"
          bgColor="#262834"
          fgColor="#56cbdb"
          className="social"
          onClick={() =>
            window.open(
              `https://web.whatsapp.com/send?text=${quote.content} - ${quote.author}`
            )
          }
        />
        <SocialIcon
          network="telegram"
          bgColor="#262834"
          fgColor="#56cbdb"
          className="social"
          onClick={() =>
            window.open(
              `https://telegram.me/share/url?url=${quote.content} - ${quote.author}`
            )
          }
        />
      </div>
    </>
  );
};

export default App;
