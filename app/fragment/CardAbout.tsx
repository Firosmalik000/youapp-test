/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import { Edit3 } from 'lucide-react';
import { ApiPost, ApiUpdate } from '@/constan/Axios';
import useGetMe from '@/hook/useGetMe';
import { useToast } from '@/hooks/use-toast';

const CardAbout = () => {
  const { me, loading, setLoading } = useGetMe();
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      username: me?.username ? me?.username : formValues.username,
      birthday: me?.birthday ? me?.birthday : formValues.birthday,
      height: me?.height ? me?.height : formValues.height,
      weight: me?.weight ? me?.weight : formValues.weight,
      interests: me?.interests ? me?.interests : [],
      horoscope: me?.horoscope ? me?.horoscope : formValues.horoscope,
      zodiac: me?.zodiac ? me?.zodiac : formValues.zodiac,
    };
    try {
      setLoading(true);
      let response;
      if (me) {
        response = await ApiUpdate('updateProfile', requestBody);
      } else {
        response = await ApiPost('createProfile', requestBody);
      }
      if (response.status === 200) {
        setShowForm(false);
        toast({ title: 'Success', description: response.data.message });
      } else {
        toast({ title: 'Failed', description: response.data.message });
      }
    } catch (err: any) {
      toast({ title: 'Failed', description: err.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    { id: 'username', label: 'Display Name', placeholder: 'Enter your name', type: 'text', defaultValue: me?.username },
    { id: 'gender', label: 'Gender', placeholder: 'Enter your gender', type: 'text', defaultValue: me?.gender },
    { id: 'birthday', label: 'Birthday', placeholder: 'Enter your birthday', type: 'date', defaultValue: me?.birthday },
    { id: 'horoscope', label: 'horoscope', placeholder: 'Enter your horoscope', type: 'text', defaultValue: me?.horoscope },
    { id: 'zodiac', label: 'Zodiac', placeholder: 'Write a short zodiac', type: 'text', defaultValue: me?.zodiac },
    { id: 'height', label: 'height', placeholder: 'Write a short height', type: 'number', defaultValue: me?.height },
    { id: 'weight', label: 'Weight', placeholder: 'Write a short weight', type: 'number', defaultValue: me?.weight },
  ];
  console.log({ me });

  return (
    <Card className="bg-gray-800 border-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">About</CardTitle>
          <Button className="text-white" onClick={handleToggleForm}>
            {showForm ? 'Close' : <Edit3 size={16} />}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showForm ? (
          <form onSubmit={handleSubmit} className="grid gap-4">
            {inputFields.map((field) => (
              <div key={field.id} className="flex items-center gap-4">
                <label className="text-white w-1/4" htmlFor={field.id}>
                  {field.label}
                </label>
                <CustomInput type={field.type} name={field.id} defaultValue={field.defaultValue} placeholder={`Enter your ${field.label.toLowerCase()}`} />
              </div>
            ))}
            <input type="hidden" name="interest" />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> : 'Save'}
            </Button>
          </form>
        ) : me ? (
          <div className="text-white grid grid-cols-2 gap-4  w-full">
            <p>Name</p>
            <p className="text-end">{me.username ?? '-'}</p>
            <p>Gender</p>
            <p className="text-end">{me.gender ?? '-'}</p>
            <p>Birthday</p>
            <p className="text-end">{me.birthday ?? '-'}</p>
            <p>Horoscope</p>
            <p className="text-end">{me.horoscope ?? '-'}</p>
            <p>Height</p>
            <p className="text-end">{me.height ?? '-'}</p>
            <p>Weight</p>
            <p className="text-end">{me.weight ?? '-'}</p>
            <p>Zodiac</p>
            <p className="text-end">{me.zodiac ?? '-'}</p>
          </div>
        ) : (
          <CardDescription className="text-white">Add your information to help others know you better.</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default CardAbout;
