import React from 'react';
import './Table.scss';

declare interface TableProps {

}

const Table: React.FC<TableProps> = (props) => {
    return (
        <table className="AppTable">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Teste</td>
                    <td>teste2</td>
                    <td>08</td>
                </tr>
                <tr>
                    <td>Teste</td>
                    <td>teste2</td>
                    <td>08</td>
                </tr>
                <tr>
                    <td>Teste</td>
                    <td>teste2</td>
                    <td>08</td>
                </tr>
                <tr>
                    <td>Teste</td>
                    <td>teste2</td>
                    <td>08</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
