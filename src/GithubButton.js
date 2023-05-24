import React from "react";
import "./GithubButton.css";

export default function GithubButton() {
  return (
    <div>
      <button
        className="github-button"
        type="button"
        title="Open-source code by Sonia 🐚"
      >
        <a
          href="https://github.com/Nirvean/ac-weather-react"
          className="github-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github github-icon"></i>
        </a>
      </button>
    </div>
  );
}
