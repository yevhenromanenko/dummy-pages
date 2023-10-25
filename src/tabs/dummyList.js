import React from 'react';

const DummyList = () => {

    const tableData = [
        { list1: 'Data 1', list2: 'Data 2' },
        { list1: 'Data 3', list2: 'Data 4' },
        { list1: 'Data 5', list2: 'Data 6' },
    ];

    return (
        <ul>
            {tableData.map((row, index) => (
                <li key={index}>
                    <strong>Dummy List 1:</strong> {row.list1}, <strong>Dummy List 2:</strong> {row.list2}
                </li>
            ))}
        </ul>
    );
};

export default DummyList;
