import React, {useState} from "react";

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
         const x = (marked.parse(line.trim()));
         
         const regex = /^<ul>/;
         console.log(x.match(regex));
        return( <div dangerouslySetInnerHTML={{__html:  (line.trim().startsWith("* ") && x.match(regex) )?  x.match(regex)?.input.slice(5, -7) : x}}></div>)
    })
}
</div>
    )
}

export default Preview;