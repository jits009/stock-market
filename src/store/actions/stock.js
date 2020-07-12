import { UPDATE_STOCK } from './types';
import store from '..';

export const updateStockMarket = (res) => dispatch => {

    const stocks = store.getState().stock.stocks.slice();

    JSON.parse(res.data).forEach(([name, price]) => {
        const index = stocks.findIndex(item => item.name === name);
        if (index !== -1) {
            stocks[index]['gain'] = stocks[index]['price'] - price;
            stocks[index]['price'] = price;
            stocks[index]['name'] = name;
            stocks[index]['updated_at'] = Date.now();
        }
        else {
            stocks.push({ name: name, price: price, created_at: Date.now(), updated_at: Date.now() })
        }
    });
    
    dispatch({ type: UPDATE_STOCK, stocks: stocks })
}