import React from "react";
import { Home } from '../home/Home';
import { BrowserRouter } from 'react-router-dom';
import './App.css'

export const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Home />          
            </BrowserRouter>
        </div>
    );
};