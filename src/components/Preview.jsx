import React from "react";

import styles from "./Preview.module.css";
import UIstyles from "./Container.module.css";

const Preview = ({content})=> {

const actualContent = content.split("\n");

    return (
<div  className={`${styles["preview"]} ${UIstyles['container']}`}>
    <h3>Hello from Preview</h3>
{
    actualContent.map((line) => {
        console.log(line);
        if(line.startsWith("# ")){
            return <h1>{line.slice(2)}</h1>
        }
        else if(line.startsWith("## ")) {
            return <h2>{line.slice(3)}</h2>
        }
        else if(line.startsWith("### ")){
            return <h3>{line.slice(4)}</h3>
        }
        else if(line.startsWith("#### ")) {
            return <h4>{line.slice(5)}</h4>
        }
        else if(line.startsWith("##### ")) {
            return <h5>{line.slice(6)}</h5>
        }
        else if(line.startsWith("###### ")) {
            return <h6>{line.slice(7)}</h6>
        }
        return <p>{line}</p>
    })
}
</div>
    )
}

export default Preview;