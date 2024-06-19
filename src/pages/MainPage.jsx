import React from 'react';
import About from "../components/About/About";
import Title from "../components/Title/Title";

const MainPage = () => {
    const info = {
        title: 'Some Title',
        body: 'Some body',
    };

    return (
        <div>
            <Title text="Hello world" />
            <About info={info} />
        </div>
    );
};

export default MainPage;


