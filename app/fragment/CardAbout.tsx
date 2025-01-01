'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import { Edit3 } from 'lucide-react';

const CardAbout = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const inputFields = [
    { id: 'name', label: 'Display Name', placeholder: 'Enter your name' },
    { id: 'gender', label: 'Gender', placeholder: 'Enter your gender' },
    { id: 'birthday', label: 'Birthday', placeholder: 'Enter your birthday' },
    { id: 'horoscope', label: 'horoscope', placeholder: 'Enter your horoscope' },
    { id: 'zodiac', label: 'Zodiac', placeholder: 'Write a short zodiac' },
    { id: 'height', label: 'height', placeholder: 'Write a short height' },
    { id: 'weight', label: 'Weight', placeholder: 'Write a short weight' },
  ];

  return (
    <Card className="bg-gray-800 border-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">About</CardTitle>{' '}
          {showForm ? (
            <Button className="text-white" onClick={handleToggleForm}>
              Close
            </Button>
          ) : (
            <Button className="text-white" onClick={handleToggleForm}>
              <Edit3 size={16} />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {showForm ? (
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex items-center gap-x-3">
                <div className="h-[100px] w-[100px] rounded-full border-gray-400 border"></div>
                <Button className="text-white">Upload Image</Button>
              </div>
              {inputFields.map((field) => (
                <div className="flex  space-y-1.5 items-center" key={field.id}>
                  <label className="text-white text-sm text-gray-400 w-2/5" htmlFor={field.id}>
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
