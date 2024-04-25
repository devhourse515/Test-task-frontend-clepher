import React from 'react';
import StockTableHeader from './StockTableHeader';
import StockTableRow from './StockTableRow';
import { StockData } from '../interfaces/stockData.interface';

interface StockTableProps {
    stockData: StockData[];
}

const StockTable: React.FC<StockTableProps> = ({ stockData }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <StockTableHeader />
            <tbody className="bg-white divide-y divide-gray-200">
                {stockData.map((data) => (
                    <StockTableRow key={data.date} data={data} />
                ))}
            </tbody>
        </table>
    );
};

export default StockTable;
