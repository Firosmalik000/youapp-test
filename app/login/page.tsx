import Link from 'next/link';
import React from 'react';
import CustomInput from '../components/CustomInput';

const page = () => {
  return (
    <section className="bg-gray-600  w-full">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl text-white">Login</h1>
        <form className="flex flex-col w-5/6 my-4">
          <CustomInput placeholder="Email" type="email" name="email" />
          <CustomInput placeholder="Password" type="password" name="password" />
          <button className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
        <div>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </section>
  );
};

export default page;
