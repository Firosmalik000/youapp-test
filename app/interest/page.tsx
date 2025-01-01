/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import CreatableSelect, { MultiValue, SingleValue } from 'react-select/creatable';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';

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
    setSelectedInterests(selectedOptions || []);
  };

  // Handle create to add a new option
  const handleCreate = (inputValue: string) => {
    const newOption: OptionType = { value: inputValue.toLowerCase(), label: inputValue };
    setOptions((prev) => [...prev, newOption]);
    setSelectedInterests((prev: any) => [...prev, newOption]);
  };

  return (
    <section className="bg-gray-900 min-h-screen px-4 w-full">
      <Header title="Interest" action={<Button>Save</Button>} />
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
    </section>
  );
};

export default Page;
