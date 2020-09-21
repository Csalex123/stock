import React from 'react';
import Products from './Table.mockdata';

import './Table.scss';

const headers = [
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price' },
    { key: 'stock', value: 'Available Stock' },
]

declare interface TableHeader {
    key: string,
    value: string
}

type indexedHeader = {
    [key: string]: TableHeader
}

function organizeDate(Data: [], hrader: TableHeader[]) {
    const indexedHeader: indexedHeader = {}

    headers.forEach(header => {
        indexedHeader[header.key] = { ...header }
    });

    const headerKeysInOrder = Object.keys(indexedHeader);
}

const Table = () => {
    organizeDate([], headers);
    return (
        <table className="AppTable">
            <thead>
                <tr>
                    {
                        headers.map(header => <th key={header.key}> {header.value} </th>)
                    }
                </tr>
            </thead>

            <tbody>
                {
                    Products.map(product => <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.stock}</td>
                    </tr>)
                }
            </tbody>
        </table>
    );
}

export default Table;
