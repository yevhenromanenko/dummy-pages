import React from 'react';
import './dummy.css'

const DummyTable = () => (
    <table className="bordered-table">
        <thead className="highlighted-row">
            <tr>
                <th>Dummy Table 1</th>
                <th>Dummy Table 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
            <tr>
                <td>Data 3</td>
                <td>Data 4</td>
            </tr>
            <tr>
                <td>Data 5</td>
                <td>Data 6</td>
            </tr>
            <tr>
                <td>Data 7</td>
                <td>Data 8</td>
            </tr>
        </tbody>
    </table>
);

export default DummyTable;
