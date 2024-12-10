/* eslint-disable react/prop-types */
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';

/**
 * StepIndicator Component
 * Renders a horizontal step indicator to visually represent the progress through a multi-step process.
 *
 * @param {Array} steps - Array of step objects containing title, icon, and description.
 * @param {number} current - The index of the current step.
 * @param {Function} onStepClick - Callback to handle clicks on step indicators (used for navigation).
 */
const StepIndicator = ({ steps, current, onStepClick }) => {
    return (
        <div className="flex flex-row justify-between w-full mb-4">
            {steps.map((item, index) => (
                <div
                    key={index}
                    // Flex container for individual step
                    className={`flex-1 flex flex-col items-center ${index <= current ? 'font-bold' : 'text-gray-400'}`}
                    onClick={() => onStepClick(index)} // Allow navigation if the step is clickable
                >
                    <div
                        // Step circle: dynamically styled based on its state (completed, active, or upcoming)
                        className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${index === current
                            ? 'border-caramel-caramel bg-transparent text-white cursor-pointer' // Active step
                            : index < current
                                ? 'border-green-500 bg-green-500 text-white' // Completed step
                                : 'border-gray-300 bg-white text-gray-500' // Upcoming step
                            }`}
                    >
                        {/* Render appropriate icon based on the step's state */}
                        {index === current ? (
                            <LoadingOutlined className="text-lg animate-spin" /> // Loading spinner for the current step
                        ) : index < current ? (
                            <CheckOutlined className="text-lg" /> // Checkmark for completed steps
                        ) : (
                            item.icon // Default icon for upcoming steps
                        )}
                    </div>
                    {/* Step Title */}
                    <span className="text-sm mt-2">{item.title}</span>
                </div>
            ))}
        </div>
    );
};

export default StepIndicator;
