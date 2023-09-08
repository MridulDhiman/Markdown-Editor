import React from "react";
import styles from "./Preview.module.css";
import UIstyles from "./Container.module.css";
import { marked } from "marked";

const Preview = ({ content }) => {
  const actualContent = content.split("\n");

  return (
    <div className={`${styles["preview"]} ${UIstyles['container']}`}>
      <h3>Hello from Preview</h3>
      {actualContent.map((line) => {
        const x = marked.parse(line.trim());

        if (line.trim().startsWith("* ") && x.includes("<ul>")) {
          const items = x
            .split(/<\/?li>/)
            .filter(Boolean)
            .map((item) => item.trim())
            .map((item, index) => (
              <div key={index}>
                {index + 1}. {item}
              </div>
            ));
          return <>{items}</>;
        }

        return (
          <div
            dangerouslySetInnerHTML={{
              __html: x.replace(/^<ul>|^<ol>|<\/ul>|<\/ol>/g, ""),
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Preview;
