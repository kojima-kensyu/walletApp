import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Input } from '../input/Input';
import { IncomesCategory } from '../categoryManagement/IncomesCategory';
import { Header } from '../header/Header';
import { CategoryManagement } from '../categoryManagement/CategoryManagement';
import { Calendar } from '../calendar/Calendar';
import { IncomesChart } from '../chart/incomesChart';
import { Setting } from '../setting/Setting';
import { Incomes } from '../input/Incomes';
import { Spending } from '../input/Spending';
import { Footer } from '../footer/Footer';
import './Home.css';

export const Home = () => {
    return(
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Input />} >
                    <Route path="incomes" element={<Incomes />} />
                    <Route path="spending" element={<Spending />} />
                </Route>
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/chart" element={<IncomesChart />}/>
                <Route path="/setting" element={<Setting />}/>
                <Route path="/setting/category" element={<CategoryManagement />} />
                <Route path="/setting/category/incomes" element={<IncomesCategory />}/>
            </Routes>
            <Footer />
        </div>
    );
}