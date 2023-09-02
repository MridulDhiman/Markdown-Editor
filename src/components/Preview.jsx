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
         const regex2 = /^<ol/;
         const regex3 = /<li>([^<]+)<\/li>/;
         const regex4 = /="([^"]+)"/;

       
        // // console.log(line.trim(), x);
        // console.log(regex4.exec(x));
        // console.log(regex3.exec(x));

         if(x.match(regex2)) {
            return(
                <>
                {!regex4.exec(x) ? 
                <div dangerouslySetInnerHTML={{__html:  regex3.exec(x) && `1. ${regex3.exec(x)[1]}`}}></div> : 
                <div dangerouslySetInnerHTML={{__html:  regex3.exec(x) && `${regex4.exec(x)[1]}. ${regex3.exec(x)[1]}`}} ></div>
                }
                </>
            ) 
         }

         
       
        return( <div dangerouslySetInnerHTML={{__html:  (line.trim().startsWith("* ") && x.match(regex) )?  x.match(regex)?.input.slice(5, -7) : x}}></div>)
    })
}
</div>
    )
}

export default Preview;