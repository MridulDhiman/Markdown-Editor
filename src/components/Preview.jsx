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
        return <p>{line}</p>
    })
}
</div>
    )
}

export default Preview;