'use client';
import React from 'react';
import CustomInput from '../components/CustomInput';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formValues[key] = value as string;
    });

    console.log(formValues);
  };

  return (
    <section className="bg-gray-700 w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-start justify-center my-4">
        <div>
          <h1 className="text-4xl text-white text-start mb-4">Login</h1>
        </div>
        <form className="flex flex-col my-4 w-[400px]" onSubmit={handleSubmit}>
          <CustomInput placeholder="Email" type="email" name="email" />
          <CustomInput placeholder="Password" type="password" name="password" />

          <Button type="submit" className="bg-gradient-to-r from-emerald-300 to-blue-600 text-white p-2 rounded shadow-md shadow-zinc-50">
            Login
          </Button>
        </form>
        <div className="w-full flex justify-center">
          <Link href="/register" className="text-white">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
