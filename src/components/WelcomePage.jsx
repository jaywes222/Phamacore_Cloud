import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import phamacoreLogo from '../assets/phamacoreLogo.png';
import InputField from './InputField';
import PackageInfo from './PackageInfo';
import PasswordField from './PasswordField';
import PhoneField from './PhoneField';
import TermsSection from './TermsSection';

const schema = z.object({
	email: z.string().email({ message: 'Please enter a valid Email.' }),
	username: z
		.string()
		.min(3, { message: 'Username should be at least 3 characters' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters' }),
	phone: z.string().refine((val) => /^\d{10,15}$/.test(val), {
		message:
			'Phone number including country code must be between 10 and 15 digits',
	}),
	termsChecked: z.boolean().refine((val) => val === true, {
		message: 'You must accept the terms and conditions',
	}),
});

const WelcomePage = () => {
	const [cusCode, setCusCode] = useState('');
	const [search, setSearch] = useSearchParams();
	const navigate = useNavigate();
	const dynamicCusCode = search.get('cusCode');
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		watch,
		trigger,
	} = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			termsChecked: false,
			phone: '',
			email: '',
			password: '',
		},
	});
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [companyDetails, setCompanyDetails] = useState({
		companyName: '',
		companyID: '',
	});
	const [packageInfo, setPackageInfo] = useState({
		name: '',
		branches: '',
		users: '',
	});

	useEffect(() => {
		const initialCusCode = search.get('cusCode');
		setCusCode(initialCusCode);

		if (!dynamicCusCode) {
			navigate(`/${initialCusCode}`, { replace: true });
		}
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					// `http://102.37.102.247:5028/api/NewClients/GetClientsDetails?cuscode=${dynamicCusCode || cusCode}`,
					`http://102.37.102.247:5028/api/NewClients/GetClientsDetails?cuscode=K68W3X`,
					{
						headers: {
							accesskey:
								'R0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9',
						},
					}
				);
				const {
					psCompanyName: companyName,
					psCusCode: companyID,
					packageName: name,
					psBranchCount: branches,
					psUserCount: users,
				} = response.data;

				if (!companyID) {
					throw new Error('No Company ID Found');
				}

				setCompanyDetails({ companyName, companyID });
				setPackageInfo({ name, branches, users });
				setLoading(false);

				if (companyID !== cusCode) {
					setCusCode(companyID);
					navigate(`/${companyID}`, { replace: true });
				}
			} catch (error) {
				console.error('Error fetching data:', error);
				setError('Failed to fetch company details');
				toast.error(
					'Failed to fetch company details. Please try again.'
				);
				setLoading(false);
			}
		};

		fetchData();
	}, [cusCode, dynamicCusCode, navigate]);

	const isFormValid =
		Object.keys(errors).length === 0 && watch('termsChecked');

	const onSubmit = async () => {
		const requestData = {
			cusCode,
			companyName: companyDetails.companyName,
			username: watch('username'),
			password: watch('password'),
			email: watch('email'),
			phone: watch('phone'),
		};

		console.log('Data to Send:', { ...requestData, password: '******' });
		setLoading(true);
		try {
			const response = await axios.post(
				'http://102.37.102.247:5028/api/NewClients/ActivateClient',
				requestData,
				{
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						accesskey:
							'R0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9',
					},
				}
			);
			setLoading(false);
			toast.success('Account Activated Successfully!');
			console.log('Activation response:', response.data);

			setTimeout(() => {
				window.location.href = 'https://phamacoreonline.co.ke/';
			}, 2200);
		} catch (error) {
			setLoading(false);
			console.error('Error activating account:', error.response?.data);
			const errorMessage = error.response?.data?.message || error.message;
			toast.error(`error: ${errorMessage}`);

			setValue('username', '');
			setValue('password', '');
			setValue('email', '');
			setValue('phone', '+254');
			setValue('termsChecked', false);
		}
	};

	return (
		<div className="welcome-page flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
			<div className="flex flex-col items-center mb-4">
				<img src={phamacoreLogo} alt="Logo" className="w-40 h-40" />
				<h1 className="text-4xl text-caramel mr-4">
					phAMACore<sup>™</sup> Cloud
				</h1>
			</div>

			<div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
				{/* Login Form */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col items-center w-full lg:w-1/2 p-4 border-r"
				>
					<h2 className="block text-left text-xl font-medium mb-4 text-gray-700 w-full">
						Activate your Subscription
					</h2>
					<InputField
						label="Email"
						type="text"
						{...register('email')}
						onBlur={() => trigger('email')}
						error={errors.email?.message}
					/>
					<InputField
						label="User Name"
						type="text"
						{...register('username')}
						onBlur={() => trigger('username')}
						error={errors.username?.message}
					/>
					<PasswordField
						label="Password"
						name="password"
						{...register('password')}
						showPassword={showPassword}
						setShowPassword={setShowPassword}
						onBlur={() => trigger('password')}
						error={errors.password?.message}
					/>
					<Controller
						name="phone"
						control={control}
						render={({ field }) => (
							<PhoneField
								label="Phone"
								value={field.value}
								{...field}
								onBlur={() => trigger('phone')}
								error={errors.phone?.message}
							/>
						)}
					/>
					<button
						type="submit"
						className={`relative bg-caramel text-white py-2 px-4 rounded-lg hover:bg-bronze transition-colors duration-200 w-full text-sm ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'
							}`}
						disabled={!isFormValid}
					>
						{loading ? (
							<span className="flex justify-center items-center">
								<span className="loader" /> Processing...
							</span>
						) : (
							'Activate My Account'
						)}
					</button>
				</form>

				<div className="info-section w-full lg:w-1/2 p-4">
					<h3 className="block text-left text-xl font-medium mb-4 text-gray-700 w-full">
						{loading
							? error
							: companyDetails.companyName
								? `${companyDetails.companyName} - ${companyDetails.companyID}`
								: 'Details not fetched'}
					</h3>

					<PackageInfo packageInfo={packageInfo} />
					<TermsSection
						termsChecked={watch('termsChecked')}
						onChange={(e) =>
							setValue('termsChecked', e.target.checked)
						}
					/>
					{errors.termsChecked && (
						<em className="form_error text-red-700">
							{errors.termsChecked.message}
						</em>
					)}
				</div>
			</div>

			<ToastContainer position="top-center" />
		</div>
	);
};

export default WelcomePage;
