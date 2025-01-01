import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
const CardInterest = () => {
  return (
    <Card className="bg-gray-800 border-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Interest</CardTitle>
          <Button>
            <Link className="text-white" href={'/interest'}>
              Edit
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white">Add your information to help others know you better.</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardInterest;
