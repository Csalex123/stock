import { Action } from './../store';
import { Product } from './../../shared/Table/Table.mockdata';

export default function (state = [], action: Action): Product[] {
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return[...action.payload];

        default:
            return state;
    }

}