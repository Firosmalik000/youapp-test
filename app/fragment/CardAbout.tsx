'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import { Edit3 } from 'lucide-react';
import axios from 'axios';

const CardAbout = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');

    const formData = new FormData(e.currentTarget);
    const formValues: { [key: string]: string | number | string[] } = {};
    formData.forEach((value, key) => {
      if (key === 'height' || key === 'weight') {
        formValues[key] = parseFloat(value as string);
      } else if (key === 'interest') {
        formValues[key] = [];
      } else {
        formValues[key] = value as string;
      }
    });
    const requestBody = {
      name: formValues.name,
      birthday: formValues.birthday,
      height: formValues.height,
      weight: formValues.weight,
      interests: formValues.interest || [],
      horoscope: formValues.horoscope,
      zodiac: formValues.zodiac,
    };

    try {
      const response = await axios.post('https://techtest.youapp.ai/api/createProfile', requestBody, {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const inputFields = [
    { id: 'name', label: 'Display Name', placeholder: 'Enter your name', type: 'text' },
    { id: 'gender', label: 'Gender', placeholder: 'Enter your gender', type: 'text' },
    { id: 'birthday', label: 'Birthday', placeholder: 'Enter your birthday', type: 'date' },
    { id: 'horoscope', label: 'horoscope', placeholder: 'Enter your horoscope', type: 'text' },
    { id: 'zodiac', label: 'Zodiac', placeholder: 'Write a short zodiac', type: 'text' },
    { id: 'height', label: 'height', placeholder: 'Write a short height', type: 'number' },
    { id: 'weight', label: 'Weight', placeholder: 'Write a short weight', type: 'number' },
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
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex items-center gap-x-3">
                <div className="h-[100px] w-[100px] rounded-full border-gray-400 border"></div>
                <Button className="text-white">Upload Image</Button>
              </div>
              {inputFields.map((field) => (
                <div className="flex  space-y-1.5 items-center" key={field.id}>
                  <label className="text-white text-sm  w-2/5" htmlFor={field.id}>
                    {field.label}
                  </label>
                  <CustomInput type={field.type} name={field.id} placeholder={field.placeholder} />
                </div>
              ))}
              <input type="hidden" name="interest" />
            </div>
            <Button type="submit">Save</Button>
          </form>
        ) : (
          <CardDescription className="text-white">Add your information to help others know you better.</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default CardAbout;
