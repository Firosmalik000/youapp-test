import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Edit3 } from 'lucide-react';
const CardInterest = () => {
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
      <CardContent>
        <CardDescription className="text-white">Add your information to help others know you better.</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardInterest;
