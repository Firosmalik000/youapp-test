/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MultiValue, SingleValue } from 'react-select';
import axios from 'axios';

// Define the type for options
interface OptionType {
  value: string;
  label: string;
}

const Page = () => {
  // State for selected interests (array of OptionType)
  const [selectedInterests, setSelectedInterests] = useState<MultiValue<OptionType>>([]);

  // State for options (array of OptionType)
  const [options, setOptions] = useState<OptionType[]>([
    { value: 'music', label: 'Music' },
    { value: 'basketball', label: 'Basketball' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'gymming', label: 'Gymming' },
    { value: 'traveling', label: 'Traveling' },
  ]);

  // Handle change to update selected interests
  const handleChange = (selectedOptions: MultiValue<OptionType> | SingleValue<OptionType>) => {
    setSelectedInterests(selectedOptions as MultiValue<OptionType> | []);
  };

  // Handle create to add a new option
  const handleCreate = (inputValue: string) => {
    const newOption: OptionType = { value: inputValue.toLowerCase(), label: inputValue };
    setOptions((prev) => [...prev, newOption]);
    setSelectedInterests((prev: any) => [...prev, newOption]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    const dataSelected = selectedInterests.map((interest) => interest.value);
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
      interests: dataSelected || [],
    };

    try {
      const response = await axios.put('https://techtest.youapp.ai/api/updateProfile', requestBody, {
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

  return (
    <section className="bg-gray-900 min-h-screen px-4 w-full">
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
