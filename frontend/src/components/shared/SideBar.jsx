import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { MdContentPasteSearch } from 'react-icons/md';
import { GrContactInfo } from 'react-icons/gr';
import { GrMapLocation } from 'react-icons/gr';
import { TbLogout2 } from 'react-icons/tb';

const SIDE_BAR_LINKS = [
    {
        key: 'Dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <RxDashboard />,
    },
    {
        key: 'Analysis',
        label: 'Analysis',
        path: '/analysis',
        icon: <MdContentPasteSearch />,
    },
    {
        key: 'Employee Details',
        label: 'Employees',
        path: '/employeeManagement',
        icon: <GrContactInfo />,
    },
    {
        key: 'GIS',
        label: 'GIS',
        path: '/gis',
        icon: <GrMapLocation />,
    },
];

const LOGOUT_LINK = {
    key: 'auth',
    label: 'Logout',
    path: '/logout',
    icon: <TbLogout2 />,
    theme: 'red',
};

const themeClasses = {
    red: 'text-red-500 hover:bg-gray-700',
    // Add other themes here
};

const SideBar = () => {
    const [activeLink, setActiveLink] = useState(SIDE_BAR_LINKS[0].key);

    const handleLinkClick = (key) => {
        setActiveLink(key);
    };

    return (
        <div className='fixed top-0 left-0 w-60 bg-[#00245c] text-gray-300 min-h-screen flex flex-col justify-between'>
            <div>
                <div className='w-full flex items-center justify-start p-8 bg-[#081830] opacity-90'>
                    <h1 className='text-2xl hover:text-[#ffc404] duration-300 font-semibold pl-2'>
                        NCT Delhi
                    </h1>
                </div>

                <nav className='p-8'>
                    <ul className='flex flex-col gap-4'>
                        {SIDE_BAR_LINKS.map((link) => (
                            <Link
                                to={link.path}
                                key={link.key}
                                className='no-underline'
                                onClick={() => handleLinkClick(link.key)}
                            >
                                <li
                                    className={`rounded-md flex gap-4 items-center p-3 cursor-pointer text-lg ${
                                        activeLink === link.key
                                            ? 'bg-[#90e1ef7e] text-[#fff]' // Active link styling
                                            : themeClasses[link.theme] ||
                                              'text-gray-300 hover:bg-[#6c757d5e] hover:duration-200'
                                    }`}
                                >
                                    {link.icon}

                                    <span className='font-medium'>
                                        {link.label}
                                    </span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className='mb-20 ml-10 w-2/3'>
                <Link
                    to={LOGOUT_LINK.path}
                    className='no-underline'
                    onClick={() => handleLinkClick(LOGOUT_LINK.key)}
                >
                    <li
                        className={`rounded-md flex items-center gap-4 p-3 cursor-pointer text-lg ${
                            activeLink === LOGOUT_LINK.key
                                ? 'bg-[#0ea5e9] text-[#fff]' // Active link styling
                                : themeClasses[LOGOUT_LINK.theme] ||
                                  'text-gray-300 hover:bg-[#6c757d] hover:duration-200'
                        }`}
                    >
                        {LOGOUT_LINK.icon}

                        <span className='font-medium'>{LOGOUT_LINK.label}</span>
                    </li>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
