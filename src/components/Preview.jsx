import React from "react";

import styles from "./Preview.module.css";
import UIstyles from "./Container.module.css";



const Preview = ({content, isEntered})=> {

const actualContent = content.split("\n").map((line) => {
    line = line.trim();
      
    //  if(line === "---") {
    //     console.log("its working");
    //       return <hr/>
    // }


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
        <>
          <strong>
            {line.split("**").join("")}
        </strong>
        </>
      
       )
    }
     else if (line.startsWith("*")  && line.endsWith("*")) {
      return (
        <>
        <em>
            {line.split("*").join("")}
        </em>
        </>
        
      )
      
    }

    

     // working on image
     const r1 = /^!\[([^\]]+)\]\(([^)]+)\)/;
     const r2 = /^!\[([^\]]+)\]\(\)/;
     const r3 = /^!\[\]\(([^)]+)\)/;
     const x = r1.exec(line.trim());
     const y = r2.exec(line.trim());
     const z = r3.exec(line.trim());


    
     
     if(x || y || z) {
        return (
           <>
           {y && <img alt={y[1]}></img>}
           {x && <img alt={x[1]} src={x[2]} style={{width: "100%", objectFit: "contain"}}></img>}
           {z && <img alt={""} src={z[1]} style={{width: "100%", objectFit: "contain"}}></img>}
           </>
        )
        
     }

     const r4 = /^\[([^\]]+)\]\(\)/;
     const r5 = /^\[([^\]]+)\]\(([^)]+)\)/;

     const a = r4.exec(line.trim());
     const b = r5.exec(line.trim());

     if(a || b) {
        return (
            <>
            {a && <a href={""}>{a[1]}</a>}
            {b && <a href={b[2]}>{b[1]}</a>}
            </>
        )
     }
     
     if(line.startsWith("* ")) { 
        return (
                <li>
                    {line.slice(2)}
                </li> 
        )
     }

    // if(isEntered && isUnorderedList){
    //     return (
    //         <li>{hello}</li>
    //     )
    // }
    
    return <p>{line}</p>
})

    return (
<div  className={`${styles["preview"]} ${UIstyles['container']}`}>
    <h3>Hello from Preview</h3>
{actualContent}
</div>
    )
}

export default Preview;