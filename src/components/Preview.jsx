import React, {useState ,useEffect, useRef} from "react";
import Showdown from "showdown";

import styles from "./Preview.module.css";
import UIstyles from "./Container.module.css";
import {marked} from "marked";


const Preview = ({content})=> {
   
const actualContent = content.split("\n");
let divRef = useRef(null);

useEffect(()=> {
if(divRef.current) {
    // divRef.current.scrollIntoView({behaviour: "smooth"})
    divRef.current.scrollTop = divRef.current.scrollHeight;
}
}, [actualContent]);



    return (
<div className={`${styles["preview"]} ${UIstyles['container']}`} ref={divRef}>
    <h3>Hello from Preview</h3>

<div ref={divRef}>
{
    actualContent.map((line) => {
         const x = (marked.parse(line.trim()));
         const regex = /^<ul>/;
         const regex2 = /^<ol/;
         const regex3 = /<li>([^<]+)<\/li>/;
         const regex4 = /="([^"]+)"/;

        let converter = new Showdown.Converter();
        let code = converter.makeHtml(line.trim());
         
        if(line.trim().match(/`([^`]+)`/)){
           return <div style={{
            color: "rgba(0, 0, 0, 0.8)",
            background: "rgb(247, 232, 232)", 
              padding: "3px",
              borderRadius:  "3px",
              width:"fit-content"
            }} 
            dangerouslySetInnerHTML={{__html: code}} ></div>;
        }

        

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

         
       
        return( <div dangerouslySetInnerHTML={{__html:  ((line.trim().startsWith("* ") || line.trim().startsWith("- ")) && x.match(regex) )?  x.match(regex)?.input.slice(5, -7) : x}}></div>)
    })
}
</div>


</div>
    )
}

export default Preview;