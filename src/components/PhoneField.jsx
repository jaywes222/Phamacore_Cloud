import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneField = ({ label, value, onChange, error }) => (
    <div className="mb-4 w-full relative">
        <label className="block text-sm text-gray-600 text-left w-full">{label}</label>
        <PhoneInput
            country={'ke'}
            value={value}
            onChange={onChange}
            inputProps={{
                required: true,
                className: 'block mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-caramel',
            }}
            masks={{ke: '... ... ...'}}
            containerStyle={{ width: '100%' }}
            inputStyle={{ width: '100%', paddingLeft: '48px' }}
            buttonStyle={{ position: 'absolute', top: '50%', left: '8px', transform: 'translateY(-50%)' }}
        />
        {error && <em className="form_error text-red-700">{error}</em>}
    </div>
);

export default PhoneField;
