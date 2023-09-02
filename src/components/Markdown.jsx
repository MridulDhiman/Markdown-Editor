import React from "react";

import styles from "./Markdown.module.css";
import UIstyles  from "./Container.module.css";

const Markdown = ({onContentChange,onEnter})=> {
    const handleChange = (e)=> {
        onContentChange(e.target.value);  
    }

    const handleKeyDown = (e)=> {
        if(e.key === "Enter") {
                onEnter(true);
        }
    }
    return (
<div className={`${styles["markdown"]} ${UIstyles['container']}`}>
    <h3>Hello From Markdown</h3>
    <textarea name="markdown" className={styles['markdown-input']} onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
</div>
    )
}

export default Markdown;