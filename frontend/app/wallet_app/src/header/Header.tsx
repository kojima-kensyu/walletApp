import React from 'react';
import { Link } from "react-router-dom";
import { SideMenu } from '../sideMenu/SideMenu';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="side_menu">
                <SideMenu />
            </div>
            <div className="title">
                <h1>WalletApp</h1>
            </div>
        </header>
    )
}