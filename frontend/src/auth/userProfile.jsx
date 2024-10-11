import React from 'react';

const UserProfile = () => {
    return (
        <div className='flex flex-col items-center min-h-screen bg-gray-100'>
            <h1 className='text-3xl font-bold text-center text-gray-800 mt-6'>
                DTC Delhi Crew Details
            </h1>
            <div className='w-full max-w-md p-6 bg-white shadow-lg rounded-lg mb-24 mt-6'>
                <h2 className='text-3xl font-bold text-center text-white mb-6 bg-indigo-600 rounded-md'>
                    Profile
                </h2>

                {/* User Details Form */}
                <form className='space-y-4'>
                    {[
                        { label: 'Crew ID' },
                        { label: 'Name' },
                        { label: 'Age' },
                        { label: 'Phone Number' },
                        { label: 'Join Date' },
                        { label: 'Role' },
                        { label: 'Years of Experience' },
                        { label: 'Assigned Bus ID' },
                        { label: 'Assigned Route ID' },
                        { label: 'Shift Start Time' },
                        { label: 'Shift End Time' },
                    ].map((detail, index) => (
                        <div key={index} className='flex items-center'>
                            <div className='w-1/3 p-2 bg-blue-100 rounded-md'>
                                <span className='font-medium text-gray-700'>{detail.label}:</span>
                            </div>
                            <input
                                type='text'
                                value=''  // Leave the value empty
                                className='mt-1 ml-4 p-2 w-2/3 border border-gray-300 rounded-md shadow-sm bg-gray-50' // Added margin-left for spacing
                                readOnly
                            />
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default UserProfile;