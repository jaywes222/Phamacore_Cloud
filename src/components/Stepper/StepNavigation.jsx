/* eslint-disable react/prop-types */

/**
 * StepNavigation Component
 * Renders navigation buttons for a multi-step process.
 *
 * @param {number} current - The index of the current step.
 * @param {number} stepsLength - Total number of steps in the process.
 * @param {Function} onNext - Callback to handle advancing to the next step.
 * @param {Function} onPrevious - Callback to handle going back to the previous step.
 */
const StepNavigation = ({ current, stepsLength, onNext, onPrevious }) => {
    return (
        <div className="flex justify-between mt-6 w-full">
            {/* Render "Previous" button if not on the first step */}
            {current > 0 && (
                <button
                    type="button"
                    onClick={onPrevious} // Call onPrevious callback when clicked
                    className="relative inline-flex items-center justify-center p-4 px-5 py-2.5 overflow-hidden font-medium transition duration-300 ease-out border-2 border-caramel-caramel rounded-xl shadow-md group"
                    aria-label="Previous step"
                >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-caramel-caramel group-hover:translate-x-0 ease">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            ></path>
                        </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-caramel-caramel transition-all duration-300 transform group-hover:translate-x-full ease">
                        Previous
                    </span>
                    <span className="relative invisible">Previous</span>
                </button>
            )}

            {/* Render "Next" button if not on the last step */}
            {current < stepsLength - 1 && (
                <button
                    type="button"
                    onClick={onNext}
                    className="relative inline-flex items-center justify-center rounded-xl px-5 py-2.5 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-caramel-caramel shadow-md group"
                    aria-label="Next step"
                >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-caramel-caramel group-hover:translate-x-0 ease">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                        </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-caramel-caramel transition-all duration-300 transform group-hover:translate-x-full ease">
                        Next
                    </span>
                    <span className="relative invisible">Next</span>
                </button>

            )}
        </div>
    );
};



export default StepNavigation;
