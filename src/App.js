import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState  } from "react";
// import React from "react";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () =>{
  const pageSize = 4
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0);
  

    return (
      <>
        <BrowserRouter>
        <LoadingBar
          height= {3}
          color='#f11946'
          progress={progress}
        />
          <NavBar />
          <Routes>
            <Route path="/" element={<News apiKey={apiKey} setProgress={setprogress} key="general"category="general" pageSize= {pageSize}/>}/>
            <Route path="/technology" element={<News apiKey={apiKey} setProgress={setprogress} key="technology" category="technology"/>}/>
            <Route path="/business" element={<News apiKey={apiKey} setProgress={setprogress} key="business" category="business"/>}/>
            <Route path="/entertainment" element={<News  apiKey={apiKey} setProgress={setprogress} key="entertainment" category="entertainment"/>}/>
            <Route path="/health" element={<News apiKey={apiKey} setProgress={setprogress} key="health" category="health"/>}/>
            <Route path="/science" element={<News apiKey={apiKey} setProgress={setprogress} key="science" category="science"/>}/>
            <Route path="/sports" element={<News apiKey={apiKey} setProgress={setprogress}  key="sports" category="sports"/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;