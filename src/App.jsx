import Markdown from "./components/Markdown"
import Preview from "./components/Preview"
import Header from "./components/Header"
import React, {useState, useEffect} from "react"
// import Header from "./components/Header"

import styles from "./App.module.css";
import "./main.css";

function App() {
const [content, setContent] = useState("");
// const [markDownContent, setMarkdownContent] = useState("");

// const [indexes, setIndexes] = useState([]);
// const [lines, setLines] = useState([]);

const handleContentChange = (data) => {
  const x = data.split(/\r?\n/).join('\n');
  // setMarkdownContent(x);
  // if(lines.length == 0) {
    setContent(x);
  // }

 


  // if(lines.length > 0) {
  //   // console.log(lines)
    
  //     let prem = /`([^`]+)`/g;
  //     lines.forEach((line, index) => {
  //         let data = line.matchAll(prem);
  //         // matchAll returns a regular expression iterator object
        
  //          for(let arr of data) {
  //              const new_str = `<span style="color: rgba(0, 0, 0, 0.8);background: rgb(247, 232, 232);   padding: 3px;border-radius:  3px;width: fit-content;">${arr[1]}</span>`;
  //              setContent((prevContent) => {
  //               const newContent = prevContent;
  //              const final =  (newContent.slice(0,indexes[index]) + new_str + newContent.slice(indexes[index]+1));
  //              return final;
  //             });
               
  //               // console.log(arr);
  //          }         
  //           })
  
  // }
  
  

}
  return (
    <div className={styles["whole"]}>
    <Header/>
    <div className={styles["main"]}>
    <Markdown onContentChange={handleContentChange} actualContent={content}/> 
    <Preview content={content} />
    </div>
     </div>
  )
}

export default App;
