'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
const CardInterest = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <Card className="bg-gray-700 border-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Interest</CardTitle>{' '}
          {showForm ? (
            <Button className="text-white" onClick={handleToggleForm}>
              Close
            </Button>
          ) : (
            <Button className="text-white" onClick={handleToggleForm}>
              Edit
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {showForm ? (
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <CustomInput type="text" name={''} placeholder="Add your Interest" />
              </div>
            </div>
          </form>
        ) : (
          <CardDescription className="text-white">Add your information to help others know you better.</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default CardInterest;
