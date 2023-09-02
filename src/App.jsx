import Markdown from "./components/Markdown"
import Preview from "./components/Preview"
import Header from "./components/Header"
import React, {useState, useEffect} from "react"
// import Header from "./components/Header"

import styles from "./App.module.css";
import "./main.css";

function App() {
const [content, setContent] = useState("");
const [isEntered, setIsEntered] = useState(false);


const handleContentChange = (data) => {
  const x = data.split(/\r?\n/).join('\n');
  setContent(x);
}

const handleEnter = (enterClicked) => {
if(enterClicked) {
  setIsEntered(true);
}
}
  return (
    <div className={styles["whole"]}>
    <Header/>
    <div className={styles["main"]}>
    <Markdown onContentChange={handleContentChange}  onEnter={handleEnter}/> 
    <Preview content={content} isEntered={isEntered} />
    </div>
     </div>
  )
}

export default App
