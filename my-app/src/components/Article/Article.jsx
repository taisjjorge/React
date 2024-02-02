import React from "react";

import "./styles.css";

//import articleImg from "../../assets/images/gatinho1.png"

export class Article extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <article id="article">
        <img src={this.props.thumbnail} alt="gatinho fofo" />
        
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>

          <p>
            {this.props.description}
          </p>
        </div>
      </article>
    );
  }
}
