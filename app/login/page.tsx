import React from 'react';

const page = () => {
  return (
    <section className="bg-gray-600 min-h-screen w-full">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl text-white">Login</h1>
        <form className="flex flex-col w-1/3">
          <label className="text-white">Email</label>
          <input className="p-2 mb-4" type="email" />
          <label className="text-white">Password</label>
          <input className="p-2 mb-4" type="password" />
          <button className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      </div>
    </section>
  );
};

export default page;
