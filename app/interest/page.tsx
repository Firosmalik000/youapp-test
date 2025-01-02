/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MultiValue, SingleValue } from 'react-select';
import { ApiUpdate } from '@/constan/Axios';
import useGetMe from '@/hook/useGetMe';

// Define the type for options
interface OptionType {
  value: string;
  label: string;
}

const Page = () => {
  const router = useRouter();
  const { me, loading } = useGetMe();
  const [selectedInterests, setSelectedInterests] = useState<MultiValue<OptionType>>([]);
  const [options, setOptions] = useState<OptionType[]>([
    { value: 'music', label: 'Music' },
    { value: 'basketball', label: 'Basketball' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'gymming', label: 'Gymming' },
    { value: 'traveling', label: 'Traveling' },
  ]);

  const handleChange = (selectedOptions: MultiValue<OptionType> | SingleValue<OptionType>) => {
    setSelectedInterests(selectedOptions as MultiValue<OptionType> | []);
  };

  const handleCreate = (inputValue: string) => {
    const newOption: OptionType = { value: inputValue.toLowerCase(), label: inputValue };
    setOptions((prev) => [...prev, newOption]);
    setSelectedInterests((prev: any) => [...prev, newOption]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataSelected = selectedInterests.map((interest) => interest.value);
    const requestBody = {
      interests: dataSelected || [],
    };

    try {
      const response = await ApiUpdate('updateProfile', requestBody);
      console.log(response);
      if (response.status === 200) {
        router.push('/');
      } else {
        console.log(response.data.message);
      }
    } catch (err: any) {
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    if (!loading && !me) {
      router.push('/login');
    }
  }, [loading, me, router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const valueSelect = me?.interests?.map((interest) => {
    return { value: interest, label: interest };
  });

  console.log({ valueSelect });

  return (
    <section className="bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-700 min-h-screen px-4 w-full">
      <form action="" onSubmit={handleSubmit}>
        <Header title="Interest" kiri={<Link href="/">Back</Link>} action={<Button type="submit">Save</Button>} />
        <div className="w-full text-white mb-6 mt-[100px]">
          <p className="font-semibold text-lg">Tell everyone about yourself</p>
          <p className="text-4xl font-bold">What interests you?</p>
        </div>
        <div className="w-full mb-6">
          <CreatableSelect
            isMulti
            options={options}
            value={selectedInterests}
            defaultValue={valueSelect}
            onChange={handleChange}
            onCreateOption={handleCreate}
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder="Type to search or add interests..."
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: '#1f2937',
                borderColor: '#374151',
                color: '#fff',
              }),
              multiValue: (base) => ({
                ...base,
                backgroundColor: '#374151',
                color: '#fff',
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: '#fff',
              }),
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default Page;
