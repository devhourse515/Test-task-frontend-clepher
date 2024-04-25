import axios from 'axios';
import { StockData } from '../components/interfaces/stockData.interface';
import { API_KEY, SYMBOL } from '../constant/constants';

export const fetchStockData = async (): Promise<StockData[]> => {
    try {
        const response = await axios.get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${SYMBOL}&apikey=${API_KEY}`
        );

        const fetchedData: StockData[] = [];
        for (const key in response.data['Time Series (Daily)']) {
            fetchedData.push({
                date: key,
                open: response.data['Time Series (Daily)'][key]['1. open'],
                high: response.data['Time Series (Daily)'][key]['2. high'],
                low: response.data['Time Series (Daily)'][key]['3. low'],
                close: response.data['Time Series (Daily)'][key]['4. close'],
                volume: response.data['Time Series (Daily)'][key]['5. volume'],
            });
        }
        return fetchedData;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw new Error('Error fetching data');
    }
};
