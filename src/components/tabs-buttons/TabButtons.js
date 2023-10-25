import tabsData from "../../../tabs.json";
import React from "react";
import './TabButtons.css'

function TabButtons({ activeTab, handleTabClick }) {
    return (
        <div>
            {tabsData.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`buttons ${activeTab === tab.id ? 'active active-button' : ''}`}
                >
                    {tab.title}
                </button>
            ))}
        </div>
    );
}

export default TabButtons;
