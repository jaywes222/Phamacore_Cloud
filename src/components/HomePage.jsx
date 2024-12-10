import { FileOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import phamacoreLogo from '../assets/phamacoreLogo.png';
import StepContent from './Stepper/StepContent';
import StepIndicator from './Stepper/StepIndicator';
import StepNavigation from './Stepper/StepNavigation';
import SubscriptionForm from './Subscription/SubscriptionForm';
import UploadForm from './Upload/UploadForm';

/**
 * Step Definition for the multi-step process.
 * Each step includes a title, an icon, a description, and a corresponding component for rendering.
 */
const steps = [
  {
    title: 'Upload Training Sheet',
    icon: <FileOutlined />,
    description: 'Please Upload the Required Training Document.',
    component: (props) => <UploadForm {...props} fileType="training" />,
  },
  {
    title: 'Upload Master Doc(s)',
    icon: <FileOutlined />,
    description: 'Upload the Master Document (OPTIONAL).',
    component: (props) => <UploadForm {...props} fileType="master" />,
  },
  {
    title: 'Activate Account',
    icon: <UserOutlined />,
    description: 'Complete the Account Activation Process.',
    component: (props) => <SubscriptionForm {...props} />,
  },
];

const HomePage = () => {
  // State for tracking the current step index.
  const [current, setCurrent] = useState(0);

  // State for storing form data across steps.
  const [formData, setFormData] = useState({ files: [] });

  // State to track the completion status of each step.
  const [stepStatus, setStepStatus] = useState([null, null, null]);

  /**
   * Update the form data when a value changes in the child components.
   * @param {string} name - The name of the field being updated.
   * @param {any} value - The new value for the field.
   */
  const handleChange = (name, value) =>
    setFormData((prevData) => ({ ...prevData, [name]: value }));

  /**
   * Advance to the next step in the process.
   * Marks the current step as completed before moving forward.
   */
  const nextStep = () => {
    const status = [...stepStatus];
    status[current] = 'completed';
    setStepStatus(status);

    // Delay transitioning to the next step for smoother UX.
    setTimeout(() => setCurrent((prev) => prev + 1), 300);
  };

  /**
   * Move back to the previous step.
   */
  const prevStep = () => setCurrent((prev) => prev - 1);

  /**
   * Jump to a specific step when clicked, but only if it's before the current step.
   * @param {number} step - The index of the step to navigate to.
   */
  const handleStepClick = (step) => {
    if (step < current) setCurrent(step);
  };

  return (
    <div className="welcome-page flex flex-col items-center min-h-screen p-6 bg-gray-50">
      {/* Header Section: Displays the logo and application name */}
      <div className="flex flex-col items-center mb-4">
        <img src={phamacoreLogo} alt="Logo" className="w-40 h-40" />
        <h1 className="text-4xl font-bold text-caramel-caramel">
          phAMACore<sup>™</sup> Cloud
        </h1>
      </div>

      {/* Main Section: Contains the stepper logic and step components */}
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <div className="w-full flex flex-col items-center">
          {/* Step Indicator: Displays the step progress and allows step navigation */}
          <StepIndicator
            steps={steps}
            current={current}
            onStepClick={handleStepClick}
          />

          {/* Step Content: Renders the content specific to the current step */}
          <StepContent
            current={current}
            steps={steps}
            formData={formData}
            handleChange={handleChange}
          />

          {/* Step Navigation: Provides buttons to move between steps */}
          <StepNavigation
            current={current}
            stepsLength={steps.length}
            onNext={nextStep}
            onPrevious={prevStep}
          />
        </div>
      </div>

      {/* Toast Notifications: Used for feedback (e.g., errors, success messages) */}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default HomePage;
