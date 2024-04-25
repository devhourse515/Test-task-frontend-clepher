import React from 'react';
import { StockData } from '../interfaces/stockData.interface';

interface StockTableRowProps {
    data: StockData;
}

const StockTableRow: React.FC<StockTableRowProps> = ({ data }) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">{data.date}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.open}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.high}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.low}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.close}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.volume}</td>
        </tr>
    );
};

export default StockTableRow;
