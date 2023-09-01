import React from "react";
import Circle from "./Circle";
import headerStyles from "./Header.module.css";

 const Header = () => {
return (
<div className={headerStyles['header']}>
<div className={headerStyles['left']}>
    <Circle color={"red"}/>
    <Circle color={"yellow"}/>
    <Circle color={"green"}/>
</div>
<div className={headerStyles["center"]}>
    README.md
</div>
<div className={headerStyles["right"]}>
    n words
</div>
</div>
)
}

export default Header;