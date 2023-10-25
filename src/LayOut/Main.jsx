import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
    return (
        <div className="overflow-x-hidden w-full">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        // overflow-x-hidden w-full
    );
};

export default Main;