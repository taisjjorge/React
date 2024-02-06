import React from "react";

import "./styles.css";

//import articleImg from "../../assets/images/gatinho1.png"

export function Article({ title, description, provider, thumbnail }) {
  return (
    <article id="article">
      <img src={thumbnail} alt="gatinho fofo" />
      
      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>
          {description}
        </p>
      </div>
    </article>
    );

}
