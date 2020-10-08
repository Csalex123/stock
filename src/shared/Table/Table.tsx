import React from 'react';
import Products from './Table.mockdata';

import './Table.scss';

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price' },
    { key: 'stock', value: 'Available Stock', right: true },
]

declare interface TableHeader {
    key: string
    value: string
    right?: boolean
}

type indexedHeader = {
    [key: string]: TableHeader
}

type OrganizedItem = {
    [key: string]: any
}

function organizeDate(data: any[], headers: TableHeader[]): [OrganizedItem[], indexedHeader] {
    const indexedHeader: indexedHeader = {}

    headers.forEach(header => {
        indexedHeader[header.key] = header;
    });

    const headerKeysInOrder = Object.keys(indexedHeader);

    const organizedData = data.map(item => {
        const organizedItem: OrganizedItem = {};

        headerKeysInOrder.forEach(key => {
            organizedItem[key] = item[key];
        });

        organizedItem.$original = item;

        return organizedItem;
    });

    return [organizedData, indexedHeader];
}

const Table = () => {
    const [organizedData, indexedHeader] = organizeDate(Products, headers);

    return (
        <table className="AppTable">
            <thead>
                <tr>
                    {
                        headers.map(header => (
                            <th
                                className={header.right ? 'right' : ''}
                                key={header.key}>
                                {header.value}
                            </th>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                {
                    organizedData.map((row, index) => {
                        return (
                            <tr key={index}>
                                {
                                    Object
                                        .keys(row)
                                        .map((item, index) => item !== '$original'
                                            ? <td
                                                key={row.$original.id + index}
                                                className={indexedHeader[item].right ? 'right' : ''}>
                                                {row[item]}
                                            </td>
                                            : null
                                        )
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;
