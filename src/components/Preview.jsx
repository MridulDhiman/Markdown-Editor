import React from "react";

import styles from "./Preview.module.css";
import UIstyles from "./Container.module.css";

const Preview = ({content})=> {



    return (
<div  className={`${styles["preview"]} ${UIstyles['container']}`}>
    <h3>Hello from Preview</h3>
  <p>{content}</p>
</div>
    )
}

export default Preview;