import React from "react";

import styles from "./Markdown.module.css";
import UIstyles  from "./Container.module.css";

const Markdown = ({onContentChange})=> {
    const handleChange = (e)=> {
        onContentChange(e.target.value);  
    }
    return (
<div className={`${styles["markdown"]} ${UIstyles['container']}`}>
    {/* <h3>Hello From Markdown</h3> */}
    <textarea name="markdown" className={styles['markdown-input']} onChange={handleChange}></textarea>
</div>
    )
}

export default Markdown;