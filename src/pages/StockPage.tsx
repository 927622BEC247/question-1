import React from 'react';
import { API_URL } from '../utils/constants';
import { useFetch } from '../hooks/useFetch';
import StockChart from '../components/StockChart';

const StockPage = () => {
  const { data, loading, error } = useFetch<{ date: string; price: number }[]>(`${API_URL}/stock-data`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <h2>Stock Price Over Time</h2>
      <StockChart data={data} />
    </div>
  );
};

export default StockPage;
