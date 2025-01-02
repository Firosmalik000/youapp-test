/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ApiPost } from '@/constan/Axios';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

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

      const response = await ApiPost('login', formValues);
      if (response.status === 200) {
        toast({ title: 'Success', description: response.data.message });
      } else if (response.status === 201) {
        router.push('/');
        toast({ title: 'Success', description: response.data.message });
      } else {
        toast({ title: 'Success', description: response.data.message });
      }

      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', response.data.access_token);
      }
    } catch (error: any) {
      toast({ title: 'Error', description: error.response?.data?.message });
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <section className="bg-gray-700 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-center my-4 w-full max-w-sm">
        <div>
          <h1 className="text-4xl text-white text-start mb-4">Login</h1>
        </div>
        <form className="flex flex-col my-4 w-full" onSubmit={handleSubmit}>
          <CustomInput placeholder="Email" type="email" name="email" />
          <CustomInput placeholder="Username" type="text" name="username" />
          <CustomInput placeholder="Password" type="password" name="password" />

          <Button type="submit" className="bg-gradient-to-r from-emerald-300 to-blue-600 text-white p-2 rounded shadow-md shadow-zinc-50 mt-4">
            Login
          </Button>
        </form>
        <div className="w-full flex justify-center gap-2 mt-4">
          <p className="text-white">Doesnt have an account?</p>
          <Link href="/register" className="text-white">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
