import React, { forwardRef } from 'react';

const InputField = forwardRef(({ label, type, name, value, onChange, error }, ref) => (
    <div className="mb-4 w-full relative">
        <label className="block text-sm text-gray-600 text-left w-full" htmlFor={name}>{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            ref={ref}
            className="block mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-caramel"
            required
            aria-invalid={!!error}
        />  
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
));

InputField.displayName = 'InputField'; 

export default InputField;
