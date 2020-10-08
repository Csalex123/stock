import { TableHeader } from "../shared/Table";


type indexedHeader = {
    [key: string]: TableHeader
}

type OrganizedItem = {
    [key: string]: any
}

export default function organizeDate(data: any[], headers: TableHeader[]): [OrganizedItem[], indexedHeader] {
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