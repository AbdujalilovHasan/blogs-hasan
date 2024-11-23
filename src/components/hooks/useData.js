import { useEffect, useState, useMemo } from 'react';
import request from '../../services/request';
import { API_ENDPOINT } from '../../utils/constants';

const useData = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Memorized query string to avoid unnecessary re-renders
  const queryString = useMemo(() => {
    return new URLSearchParams(params).toString();
  }, [params]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null); // Clear previous errors
      try {
        const fullUrl = `${API_ENDPOINT}${url}${queryString ? `?${queryString}` : ''}`;
        const response = await request.get(fullUrl);
        setData(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url, queryString]); // Dependencies include `url` and `queryString`

  return { data, loading, error };
};

export default useData;