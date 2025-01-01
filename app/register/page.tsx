import React from 'react';
import CustomInput from '../components/CustomInput';
import Link from 'next/link';

const page = () => {
  return (
    <section className="bg-gray-600  w-full">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl text-white text-start">Register</h1>
        <form className="flex flex-col w-5/6 my-4">
          <CustomInput placeholder="Email" type="email" name="email" />
          <CustomInput placeholder="Username" type="text" name="username" />
          <CustomInput placeholder="Password" type="password" name="password" />
          <CustomInput placeholder="Confirm Password" type="password" name="confirmPassword" />

          <button className="bg-blue-500 text-white p-2 rounded">Register</button>
        </form>
        <div>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default page;
