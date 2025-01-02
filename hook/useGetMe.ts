/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { ApiGet } from '@/constan/Axios';
import { useEffect, useState } from 'react';

interface MeData {
  id: string;
  name: string;
  email: string;
  username?: string;
  interests?: string[];
  zodiac?: string;
  horoscope?: string;
  gender?: string;
  birthday?: string;
  height?: number;
  weight?: number;
  image?: string;
}

const useGetMe = () => {
  const [me, setMe] = useState<MeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiGet('getProfile');
        setMe(response.data.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'An error occurred');
        console.error(err.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { me, loading, error, setLoading };
};

export default useGetMe;
