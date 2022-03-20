import React, { useState, useRef } from "react";
import validator from "validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./main.css";

const Main = ({ setShowError, setMessageError }) => {
  const [url, setUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState();
  const shortUrlBox = useRef();
  console.log(shortUrlBox);
  const shortUrl = () => {
    if (!url) {
      setShowError(true);
      setMessageError("please enter url!");
      return;
    }
    if (!validator.isURL(url)) {
      setShowError(true);
      setMessageError("please enter url correctly!");
      return;
    }
    axios.post("http://localhost:5000/cut", { url }).then((event) => {
      const { data } = event;
      setShortedUrl(data.short);
    });
    console.log(shortedUrl);
  };
  return (
    <section>
      <h1
        style={{
          color: localStorage.getItem("theme") === "dark" ? "#fff" : "#2d2d2e",
        }}
      >
        shortener url
      </h1>
      <div className="main">
        <input
          type="text"
          placeholder="paste your link here..."
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={shortUrl}> Drop!</button>
      </div>
      {shortedUrl ? (
        <div
          className="result"
          style={{ opacity: shortedUrl ? 1 : 0 }}
          onClick={() =>
            navigator.clipboard.writeText(shortUrlBox.current.defaultValue)
          }
        >
          <input
            type="text"
            ref={shortUrlBox}
            readOnly
            value={`localhost:5000/${shortedUrl}`}
          />
          <FontAwesomeIcon icon={faClipboard} />
        </div>
      ) : null}
    </section>
  );
};

export default Main;
