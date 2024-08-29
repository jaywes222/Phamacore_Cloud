// src/components/PasswordField.jsx
import React, { forwardRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordField = forwardRef(({ label, name, value, onChange, showPassword, setShowPassword, error }, ref) => (
    <div className="mb-4 w-full relative">
        <label className="block text-sm text-gray-600 text-left w-full" htmlFor={name}>{label}</label>
        <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                ref={ref}
                className="block mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-caramel pr-10"
                required
                aria-invalid={!!error}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 border-l border-gray-300">
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="flex items-center text-sm leading-5 px-2"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
));

PasswordField.displayName = 'PasswordField'; // Helps with debugging

export default PasswordField;
