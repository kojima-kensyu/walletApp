import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Setting = () => {
    return(
        <div>
            <h2>
                Setting
            </h2>
            <ul>
                <li>
                    <Link to="/setting/category">収支カテゴリー管理</Link>
                </li>
            </ul>
        </div>
    );
}