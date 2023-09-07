import Markdown from "./components/Markdown"
import Preview from "./components/Preview"
import Header from "./components/Header"
import React, {useState} from "react"
// import Header from "./components/Header"

import styles from "./App.module.css";
import "./main.css";

function App() {
const [content, setContent] = useState("");

const handleContentChange = (data) => {
  const x = data.split(/\r?\n/).join('\n');
  setContent(x);
}
  return (
    <div className={styles["whole"]}>
    <Header/>
    <div className={styles["main"]}>
    <Markdown onContentChange={handleContentChange} actualContent={content}/> 
    <Preview content={content}/>
    </div>
     </div>
  )
}

export default App
