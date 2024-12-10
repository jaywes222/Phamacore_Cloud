/* eslint-disable react/prop-types */

/**
 * StepContent Component
 * Dynamically renders the content of the current step in a multi-step process.
 *
 * @param {number} current - The index of the current step.
 * @param {Array} steps - Array of step objects containing description and a component to render.
 * @param {Object} formData - The data shared between steps, typically user input or state.
 * @param {Function} handleChange - Callback to update formData when user input changes.
 */
const StepContent = ({ current, steps, formData, handleChange }) => {
    // Destructure and retrieve the component to render for the current step
    const { component: StepComponent } = steps[current];

    return (
        <div className="flex flex-col items-center w-full">
            {/* Display the description for the current step */}
            <div className="text-center text-caramel-caramel mb-2">
                <p>{steps[current].description}</p>
            </div>

            {/* Render the specific component for the current step, passing necessary props */}
            {StepComponent && (
                <StepComponent formData={formData} handleChange={handleChange} />
            )}
        </div>
    );
};

export default StepContent;
