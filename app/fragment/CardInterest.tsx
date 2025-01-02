import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Edit3 } from 'lucide-react';
import useGetMe from '@/hook/useGetMe';
const CardInterest = () => {
  const { me } = useGetMe();
  return (
    <Card className="bg-gray-800 border-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Interest</CardTitle>
          <Button>
            <Link className="text-white" href={'/interest'}>
              <Edit3 size={16} />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {me && me.interests ? (
          me.interests.map((interest: string) => (
            <Button key={interest} className="text-white bgblue">
              {interest}
            </Button>
          ))
        ) : (
          <CardDescription className="text-white">Add your information to help others know you better.</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default CardInterest;
