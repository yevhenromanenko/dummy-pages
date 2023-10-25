import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import TabLoader from './components/tab-loader/TabLoader';
import tabsData from '../tabs.json';
import {useNavigate} from "react-router";
import TabButtons from "./components/tabs-buttons/TabButtons";
import './App.css'

function App() {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${tabsData[0].id}`);
    }, []);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        navigate(tabId);
    };

    return (
        <div className={'main'}>
            <TabButtons activeTab={activeTab} handleTabClick={handleTabClick} />
            <Routes>
                <Route path="/" element={<TabLoader path={tabsData[0].path} />} />
                {tabsData.map((tab) => (
                    <Route key={tab.id} path={tab.id} element={<TabLoader path={tab.path} />} />
                ))}
            </Routes>
        </div>
    );
}

export default App;
