import React from 'react';
import Layout from "./components/hoc/Layout/Layout";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import PostsSlider from "./components/PostsSlider/PostsSlider";

function App() {
    return (
        <>
            <Header/>
            <Layout>
                <Banner/>
                <PostsSlider/>
            </Layout>
        </>
    );
}

export default App;
