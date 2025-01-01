import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-red-600">
        <Link href="/login">Login</Link>
      </h1>
    </div>
  );
}
