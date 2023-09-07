import React from "react";

import styles from "./Markdown.module.css";
import UIstyles  from "./Container.module.css";

const Markdown = ({actualContent, onContentChange})=> {


    const handleChange = (e)=> {
      onContentChange(e.target.value);
    }


    const handleKeyDown = (e) => {
if(e.key === "Enter") {
    onContentChange(`${actualContent}\n`);
}
    }
    const handlePaste = (e) => {
// console.log(e.clipboardData.getData("text");
// console.log(e.clipboardData.items)

let items = e.clipboardData.items;

for(let i = 0;i<items.length;i++) {
    let item = items[i];
    console.log(item.kind);
    if(item.kind === "file") {
        let file = item.getAsFile();
        let reader = new FileReader();
        reader.onload = (e) => {
           const src = e.target.result;
           const markdownImg = `![copied image](${src})`;
        const modifiedContent = `${actualContent}\n${markdownImg}\n`;
        onContentChange(modifiedContent);
            // console.log(e.target.result)
        }
        reader.readAsDataURL(file);
    }
}
    };
    
    return (
<div className={`${styles["markdown"]} ${UIstyles['container']}`}>
    <h3>Hello From Markdown</h3>
    <textarea name="markdown" className={styles['markdown-input']} value={actualContent} onChange={handleChange} onPaste={handlePaste} onKeyDown={handleKeyDown}></textarea>
</div>
    )
}

export default Markdown;