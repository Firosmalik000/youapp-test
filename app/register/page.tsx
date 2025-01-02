/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ApiPost } from '@/constan/Axios';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const formValues: { [key: string]: string } = {};
      formData.forEach((value, key) => {
        formValues[key] = value as string;
      });

      const response = await ApiPost('register', formValues);
      console.log(response);
      if (response.status === 200) {
        console.log(response.data.message);
        router.push('/login');
      } else {
        console.log(response.data.message);
      }
    } catch (error: any) {
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <section className="bg-gray-700 w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-start justify-center my-4">
        <div>
          <h1 className="text-4xl text-white text-start mb-4">Register</h1>
        </div>
        <form className="flex flex-col my-4 w-[400px]" onSubmit={handleSubmit}>
          <CustomInput placeholder="Email" type="email" name="email" />
          <CustomInput placeholder="Username" type="text" name="username" />
          <CustomInput placeholder="Password" type="password" name="password" />
          <CustomInput placeholder="Confirm Password" type="password" name="confirmPassword" />

          <Button type="submit" className="bg-gradient-to-r from-emerald-300 to-blue-600 text-white p-2 rounded shadow-md shadow-zinc-50">
            Register
          </Button>
        </form>
        <div className="w-full flex justify-center">
          <Link href="/login" className="text-white">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
