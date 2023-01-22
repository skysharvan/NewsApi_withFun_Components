import './App.css';
import React, { useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const  App  = ()=> {
  const pageSize = 8
  const apiKey = process.env.REACT_APP_NEWS_API
  const[progress , setProgress] = useState(0)
  // live cycle method(render) , it run or display html on our screen
    return (
        <BrowserRouter>
            <LoadingBar
              color='#f11946'
              height={3}
              progress={progress}
            />
            <Navbar/>
            <Routes >
              <Route path="/home" element={<News setProgress={setProgress} apiKey={ apiKey}  key="general" pageSize={ pageSize} country="in" category="general" />} />
              <Route path="/" element={<News setProgress={setProgress} apiKey={ apiKey} key="general" pageSize={ pageSize} country="in" category="general" />} />
              <Route exact path="/business" element ={<News setProgress={ setProgress} apiKey={ apiKey} key="business" pageSize={ pageSize} country="in" category="business" />} />
              <Route exact path="/entertainment" element = {<News setProgress={ setProgress}apiKey={ apiKey}  keys="entertainment" pageSize={ pageSize} country="in" category="entertainment"/>}/>
              <Route exact path="/general" element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={ pageSize} country="in" category="general"/>}/>
              <Route exact path="/health" element = {<News setProgress={ setProgress} apiKey={ apiKey} key="health" pageSize={ pageSize} country="in" category="health"/>}/>
              <Route exact path="/science" element = {<News setProgress={ setProgress}apiKey={ apiKey}  key="science" pageSize={ pageSize} country="in" category="science"/>}/>
              <Route exact path="/sports" element = {<News setProgress={ setProgress} apiKey={ apiKey} key="sports" pageSize={ pageSize} country="in" category="sports"/>}/>
              <Route exact path="/technology" element={<News setProgress={ setProgress} apiKey={ apiKey} key="technology" pageSize={ pageSize} country="in" category="technology"/>}/>
           </Routes>
        </BrowserRouter>
    ) 
}
export default App;


