"use client";
import React, { useState } from "react";

function Shorten() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert("Shortened URL: " + result.message);
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");

      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-green-100 my-16 p-8 flex flex-col gap-5 rounded-lg">
      <h1>Shorten</h1>
      <div className="flex flex-col gap-7">
        <input
          value={url}
          type="text"
          className="p-4 focus:outline-green-700   "
          placeholder="Enter the URL to shorten"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          value={shortUrl}
          type="text"
          className="p-4 focus:outline-green-700   "
          placeholder="Enter preferred short URL"
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button
          onClick={generate}
          className="bg-green-600 px-10 py-2 mx-2 rounded-lg hover:bg-green-400 shadow-green-900 drop-shadow-xl shadow-md shadow-inner font-bold text-white"
        >
          Shorten
        </button>
      </div>
      {generated && (
        <div className="flex flex-col gap-5">
          <h2>Shortened URL</h2>
          <a
            href={generated}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            {generated}
          </a>
        </div>
      )}
    </div>
  );
}

export default Shorten;
