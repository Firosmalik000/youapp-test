'use client';
import Link from 'next/link';
import Header from './components/Header';
import CardAbout from './fragment/CardAbout';
import CardInterest from './fragment/CardInterest';
import useGetMe from '@/hook/useGetMe';

export default function Home() {
  const { me } = useGetMe();
  console.log({ me });
  return (
    <section className="bg-gray-900 min-h-screen px-4 w-full">
      <Header kiri={<Link href="/login">Login</Link>} title={me?.username} action={<Link href="/register">Register</Link>} />
      <div className="w-full  bg-gray-800 rounded-lg h-[250px] mb-6"></div>
      <div className="flex flex-col gap-y-4">
        <CardAbout />
        <CardInterest />
      </div>
    </section>
  );
}
