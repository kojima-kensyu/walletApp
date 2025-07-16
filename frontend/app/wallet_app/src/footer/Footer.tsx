import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import input from '../images/pen.png';
import calender from '../images/calender.png';
import graph from '../images/graph.png';
import setting from '../images/setting.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <nav className="navigation">
                <div className="link_input">
                    <Link to="/">
                        <img src={input} alt="入力アイコン"/>
                        <p>入力</p>
                    </Link>
                </div>
                <div className="link_calender">
                    <Link to="/calender">
                        <img src={calender} alt="カレンダーアイコン" />
                        <p>カレンダー</p>
                    </Link>
                </div>
                <div className="link_graph">
                    <img src={graph} alt="グラフアイコン" />
                    <p>グラフ</p>
                </div>
                <div className="link_category">
                    <Link to="/category">
                        <img src={setting} alt="設定アイコン" />
                        <p>設定</p>
                    </Link>
                </div>  
            </nav>

        </footer>
    )
}