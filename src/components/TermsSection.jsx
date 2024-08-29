import React from 'react';

const TermsSection = ({ termsChecked, onChange }) => (
    <>
        <div className="text-gray-700 text-sm mb-4 mt-10">
            <p>
                By confirming this purchase, I agree to the CoreBase Solutions phAMACoreCloud Agreement.
                <br/>
                <strong>Your annual subscription begins today.</strong> 
                <br/>
                <em>Check your confirmation email for details.</em>
            </p>
            <br/>
            <p>
                I understand I am also creating a new phAMACoreCloud account. 
                By signing up to create an account and subsequent user accounts I accept phAMACoreCloud Terms of Use and Privacy Policy as shared in your contract,
                including the processing of your personal data.
            </p>
        </div>
        <div className="mt-6 w-full flex flex-col items-start">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={termsChecked}
                    onChange={onChange}
                    className="mr-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                    By clicking Activate My Account, I agree to the 
                    <a href="/terms-and-conditions" target="_blank" className="text-blue-500 underline ml-1">
                        Terms & Conditions
                    </a> and
                    <a href="/privacy-policy" target="_blank" className="text-blue-500 underline ml-1">
                        Privacy Policy
                    </a>.
                </label>
            </div>
        </div>
    </>
);

export default TermsSection;
