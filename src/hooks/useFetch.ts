import { useEffect, useState } from 'react';
import { api, getStocks } from '../services/api';

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log('url ',getStocks);
                const response = await fetch('http://20.244.56.144/evalution-service/stocks', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ4MDY2NDA1LCJpYXQiOjE3NDgwNjYxMDUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYxZTM4NGUwLWVlMTUtNDE4YS1iOWM2LWExY2VkYmNkMDI5MSIsInN1YiI6InZ2ZW5uaWxhNjEwQGdtYWlsLmNvbSJ9LCJlbWFpbCI6InZ2ZW5uaWxhNjEwQGdtYWlsLmNvbSIsIm5hbWUiOiJ2ZW5uaWxhIHYiLCJyb2xsTm8iOiI5Mjc2MjJiZWMyNDciLCJhY2Nlc3NDb2RlIjoid2hlUVV5IiwiY2xpZW50SUQiOiJmMWUzODRlMC1lZTE1LTQxOGEtYjljNi1hMWNlZGJjZDAyOTEiLCJjbGllbnRTZWNyZXQiOiJhQlhCRWdzd1pNR0R0U0RjIn0.y3gA_IJR-yVIhzNjq0NOcxBUFdGQbbrlhMG5EAplrTw`,
          },
        });
console.log('>>RES',response)
console.log('RES',response)
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
