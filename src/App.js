import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

import bgUrl1 from './assets/bg1.jpg'
import bgUrl2 from './assets/bg3.jpg'

const App = () => {
    return (
        <>
            <Header title={"This is title"} descr={"This is Description!"}/>
            <Layout id={1} title={"This is title for 1st title"} descr={"This is Description or 1st desc!"}
                    urlBg={bgUrl1}/>
            <Layout id={2} title={"This is title for 2nd title"} descr={"This is Description or 2nd desc!"}
                    colorBg={"silver"}/>
            <Layout id={3} title={"This is title for 3rd title"} descr={"This is Description or 3rd desc!"}
                    urlBg={bgUrl2}/>
            <Footer/>
        </>
    );
}

export default App;
