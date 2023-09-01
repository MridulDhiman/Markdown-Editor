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
        if(line.trim() === "---") {
            console.log("its working");
              return <hr/>
        }


        if(line.startsWith("# ")){
            return <>
             <h1>{line.slice(1)}</h1>
             <hr/>
            </>
           
        }
        else if(line.startsWith("## ")) {
            return  <>
             <h2>{line.slice(2)}</h2>
             <hr/>
            </>
            
        }
        else if(line.startsWith("### ")){
            return  <>
             <h3>{line.slice(3)}</h3>
             <hr/>
            </>
        }
        else if(line.startsWith("#### ")) {
            return  <>
             <h4>{line.slice(4)}</h4>
             <hr/>
            </>
        }
        else if(line.startsWith("##### ")) {
            return  <>
             <h5>{line.slice(5)}</h5>
             <hr/>
            </>
        }
        else if(line.startsWith("###### ")) {
            return  <>
             <h6>{line.slice(6)}</h6>
             <hr/>
            </>
        }
        if(line.startsWith("**") && line.endsWith("**") ) {
           return (
            <div>
              <strong>
                {line.split("**").join("")}
            </strong>
            </div>
          
           )
        }
         else if (line.startsWith("*")  && line.endsWith("*")) {
          return (
            <div>
            <em>
                {line.split("*").join("")}
            </em>
            </div>
            
          )
          
        }
        return <p>{line}</p>
    })
}
</div>
    )
}

export default Preview;