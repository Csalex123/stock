import React from 'react';
import './Table.scss';

declare interface TableProps {

}

const Table: React.FC<TableProps> = (props) => {
    return (
        <table>
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
                    <td>teste3</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
