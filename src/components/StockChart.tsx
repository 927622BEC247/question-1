import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface StockChartProps {
  data: { date: string; price: number }[];
}

const StockChart: React.FC<StockChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
