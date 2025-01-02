'use client';
import Link from 'next/link';
import Header from './components/Header';
import CardAbout from './fragment/CardAbout';
import CardInterest from './fragment/CardInterest';
import useGetMe from '@/hook/useGetMe';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Home() {
  const router = useRouter();
  const { me, loading } = useGetMe();
  useEffect(() => {
    if (!loading && !me) {
      router.push('/login');
    }
  }, [loading, me, router]);
  console.log({ me });
  return (
    <section className="bg-gray-900 min-h-screen px-4 w-full">
      <Header kiri={<Link href="/login">Login</Link>} title={me?.username} action={<Link href="/register">Register</Link>} />
      <div className="w-full relative  bg-gray-800 rounded-lg h-[250px] mb-6">
        <div className="absolute bottom-5 left-3 flex  gap-x-2">
          {me?.zodiac && <Button className="text-white  mt-4"> {me.zodiac}</Button>}
          {me?.horoscope && <Button className="text-white  mt-4"> {me.horoscope}</Button>}
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <CardAbout />
        <CardInterest />
      </div>
    </section>
  );
}
