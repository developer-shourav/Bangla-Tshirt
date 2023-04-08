import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header> </Header>
            <Outlet> </Outlet>
            <Toaster />
            <Footer> </Footer>
        </div>
    );
};

export default Main;