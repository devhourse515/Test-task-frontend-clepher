import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <svg className="animate-spin h-5 w-5 mr-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.42 0-4.632-.889-6.322-2.357l2.002-2.002zm9.192-2.085A7.963 7.963 0 0120 12h-4c0 2.689-1.061 5.219-2.98 7.099l-2.002-2.002zM12 20c4.418 0 8-3.582 8-8h-4c0 2.689-1.061 5.219-2.98 7.099L12 20zm-2-5.291V17c3.528 0 6.595-1.897 8.293-4.735l-2.002-2.002A5.966 5.966 0 0012 11v3.709zM11.292 7.206A7.963 7.963 0 0012 4v4c-2.689 0-5.219 1.061-7.099 2.98l2.002 2.002C6.368 12.889 8.58 12 11 12V7.206z"></path>
            </svg>
            <span>Loading...</span>
        </div>
    );
};

export default LoadingSpinner;
