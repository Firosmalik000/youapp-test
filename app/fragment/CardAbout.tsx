'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';

const CardAbout = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const inputFields = [
    { id: 'name', label: 'Name', placeholder: 'Enter your name' },
    { id: 'email', label: 'Email', placeholder: 'Enter your email' },
    { id: 'bio', label: 'Bio', placeholder: 'Write a short bio' },
  ];

  return (
    <Card className="bg-gray-700 border-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">About</CardTitle>{' '}
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
              {inputFields.map((field) => (
                <div className="flex flex-col space-y-1.5" key={field.id}>
                  <label className="text-white" htmlFor={field.id}>
                    {field.label}
                  </label>
                  <CustomInput type="text" name={field.id} placeholder={field.placeholder} />
                </div>
              ))}
            </div>
          </form>
        ) : (
          <CardDescription className="text-white">Add your information to help others know you better.</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default CardAbout;
