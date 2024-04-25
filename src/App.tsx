import React, { useState, useEffect } from 'react';
import StockTable from './components/StockTable/StockTable';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { fetchStockData } from './services/stockService';

const App: React.FC = () => {
  const [stockData, setStockData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockData();
        setStockData(data);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-center mb-5">Microsoft (MSFT) Stock Data</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <StockTable stockData={stockData} />
      )}
    </div>
  );
};

export default App;
