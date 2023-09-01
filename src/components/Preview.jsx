import React from "react";

import styles from "./Preview.module.css";
import UIstyles from "./Container.module.css";
import {marked} from "marked";


const Preview = ({content})=> {

const actualContent = content.split("\n");

    return (
<div  className={`${styles["preview"]} ${UIstyles['container']}`}>
    <h3>Hello from Preview</h3>
{
    actualContent.map((line) => {
        return <div dangerouslySetInnerHTML={{__html: marked.parse(line.trim())}}></div>
    })
}
</div>
    )
}

export default Preview;