import React from 'react';

interface FormType {
  inputName: string;
  inputPlaceholder: string;
  inputMessage: string;
  value: string; // Bind input value to state
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Specify the type for onChange
}

const FormInput: React.FC<FormType> = ({ inputName, inputPlaceholder, inputMessage, value, onChange }) => {
  return (
    <div className='flex flex-col w-full max-w-md py-3'> {/* Ensure full width */}
      <p className="text-2xl font-semibold text-white">{inputName}</p>
      <input
        type="text"
        placeholder={inputPlaceholder}
        value={value} // Bind input value to state
        onChange={onChange} // Handle input changes
        className="w-full p-2 text-white bg-gray-800 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" // Added w-full for full width
      />
      <p className="text-white">{inputMessage}</p>
    </div>
  );
};

export default FormInput;
