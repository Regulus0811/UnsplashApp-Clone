import { useState } from "react";
import React from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "UbDWBchXctqT0VapiBTb_VgbVtcggjBsZM-q8EiX2Y0",
});

const SearchPhotos = () => {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const SearchP = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };
  console.log(query);
  return (
    <div>
      <form className="form" onSubmit={SearchP}>
        <label htmlFor="query" className="label">
          {" "}
        </label>

        <input
          type="text"
          name="query"
          className="input"
          placeholder='Try "landscape" or "Tokyo"'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pics.id}>
            <img
              src={pic.urls.full}
              alt={pic.alt_description}
              className="card-image"
              width="50%"
              height="50%"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPhotos;
