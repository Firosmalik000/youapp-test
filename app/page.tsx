'use client';
import Link from 'next/link';
import Header from './components/Header';

import CardAbout from './fragment/CardAbout';
import CardInterest from './fragment/CardInterest';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const token = window.localStorage.getItem('token');
      try {
        const response = await axios.get(
          'https://techtest.youapp.ai/api/getProfile',

          {
            headers: {
              'x-access-token': token,
            },
          }
        );
        console.log(response);
        setEmail(response.data.data.username);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-gray-900 min-h-screen px-4 w-full">
      <Header kiri={<Link href="/login">Login</Link>} title={email} action={<Link href="/register">Register</Link>} />
      <div className="w-full  bg-gray-800 rounded-lg h-[250px] mb-6"></div>
      <div className="flex flex-col gap-y-4">
        <CardAbout />
        <CardInterest />
      </div>
    </section>
  );
}
