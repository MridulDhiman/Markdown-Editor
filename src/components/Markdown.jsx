import React, {useEffect, useRef} from "react";

import styles from "./Markdown.module.css";
import UIstyles  from "./Container.module.css";

const Markdown = ({actualContent, onContentChange})=> {

const textAreaRef = useRef(null);

const scrollToCursor  = () => {
    if(textAreaRef.current) {
        const cursorPosition = textAreaRef.current.selectionStart;

        // Calculate the scroll position
        const lineHeight = 20; // You may need to adjust this based on your textarea's styling
        const scrollTop = lineHeight * Math.floor(cursorPosition / textAreaRef.current.cols);
  
        // Set the scroll position
        textAreaRef.current.scrollTop = scrollTop;
    }
}

useEffect(()=> {
    scrollToCursor();
}, [actualContent]);

    const handleChange = (e)=> {
      onContentChange(e.target.value);
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
        }
        reader.readAsDataURL(file);
    }
}
    };
    
    return (
<div className={`${styles["markdown"]} ${UIstyles['container']}`} >
    <h3>Hello From Markdown</h3>
    <textarea ref={textAreaRef} name="markdown" className={styles['markdown-input']} value={actualContent} onChange={handleChange} onPaste={handlePaste}></textarea>
</div>
    )
}

export default Markdown;