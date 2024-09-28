import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { MdContentPasteSearch } from 'react-icons/md';
import { GrContactInfo } from 'react-icons/gr';
import { GrMapLocation } from 'react-icons/gr';
import { TbLogout2 } from 'react-icons/tb';
import { FaAirbnb } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

const SIDE_BAR_LINKS = [
    {
        key: 'Dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <RxDashboard />,
    },
    {
        key: 'Analysis',
        label: 'Analytics',
        path: '/analysis',
        icon: <MdContentPasteSearch />,
    },
    {
        key: 'Employee Details',
        label: 'Scheduler',
        path: '/schedulerManagement',
        icon: <GrContactInfo />,
    },
    {
        key: 'GIS',
        label: 'GIS',
        path: '/gisSystem',
        icon: <GrMapLocation />,
    },
];

const LOGOUT_LINK = {
    key: 'auth',
    label: 'Logout',
    path: '/login',
    icon: <TbLogout2 />,
    theme: 'red',
};

const themeClasses = {
    red: 'text-red-500 hover:bg-gray-700',
};

const SideBar = () => {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(
        localStorage.getItem('activeLink') || SIDE_BAR_LINKS[0].key
    );
    const [isSidebarOpen, setIsSidebarOpen] = useState(
        JSON.parse(localStorage.getItem('isSidebarOpen')) ?? true
    );

    useEffect(() => {
        // Save activeLink and isSidebarOpen to localStorage when they change
        localStorage.setItem('activeLink', activeLink);
    }, [activeLink, isSidebarOpen]);

    const handleLinkClick = (key, path) => {
        if (key === LOGOUT_LINK.key) {
            localStorage.clear();
            navigate(LOGOUT_LINK.path);
        } else {
            setActiveLink(key);
            navigate(path); // Navigate to the clicked link's path
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='min-h-screen'>
            {/* Hamburger Icon */}
            {!isSidebarOpen && (
                <div
                    className='fixed top-5 left-7 z-50 cursor-pointer text-white'
                    onClick={toggleSidebar}
                >
                    <RxHamburgerMenu size={30} />
                </div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 min-h-screen bg-[#320d4b] text-gray-300 flex flex-col justify-between transition-[transform,width] duration-700 ease-in-out ${
                    isSidebarOpen
                        ? 'translate-x-0 w-[16%]'
                        : 'translate-x-0 w-[6%]'
                }`}
            >
                {/* Sidebar Header with Close Icon */}
                <div className='w-full flex items-center justify-center p-8 bg-[#081830] opacity-90'>
                    {isSidebarOpen && (
                        <h1 className='md:text-2xl wide:text-3xl xl hover:text-[#ffc404] font-semibold'>
                            NCT Delhi
                            <div className='text-sm flex justify-center items-center gap-2'>
                                RouteOptiX <FaAirbnb className='text-xl' />
                            </div>
                        </h1>
                    )}
                    {/* {isSidebarOpen && (
                        <div className='bg-gray-300 fixed top-4 right-4 p-1 rounded-full hover:bg-gray-400 active:scale-95 duration-300 ease-in-out'>
                            <AiOutlineClose
                                size={24}
                                className='cursor-pointer text-black rounded-full'
                                onClick={toggleSidebar}
                            />
                        </div>
                    )} */}
                </div>

                {/* Navigation Links */}
                <nav className={isSidebarOpen ? `p-8` : 'p-4'}>
                    <ul className='flex flex-col gap-4'>
                        {SIDE_BAR_LINKS.map((link) => (
                            <li
                                key={link.key}
                                className={`rounded-md flex gap-4 ${
                                    isSidebarOpen ? '' : 'justify-center'
                                } items-center p-3 cursor-pointer text-lg ${
                                    activeLink === link.key
                                        ? 'bg-[#90e1ef7e] text-[#fff]' // Active link styling
                                        : themeClasses[link.theme] ||
                                          'text-gray-300 hover:bg-[#6c757d5e] hover:duration-200'
                                }`}
                                onClick={() =>
                                    handleLinkClick(link.key, link.path)
                                }
                            >
                                <div className='text-2xl'>{link.icon}</div>
                                {isSidebarOpen && (
                                    <span className='font-medium text-sm md:text-lg extraWide:text-2xl'>
                                        {link.label}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Logout Button */}
                <div
                    className={
                        isSidebarOpen
                            ? `mb-20 ml-10 w-2/3`
                            : ' w-full flex justify-center mb-20'
                    }
                >
                    <li
                        className={`rounded-md flex items-center gap-4 p-3 cursor-pointer text-lg ${
                            activeLink === LOGOUT_LINK.key
                                ? 'bg-[#0ea5e9] text-[#fff]' // Active link styling
                                : themeClasses[LOGOUT_LINK.theme] ||
                                  'text-gray-300 hover:bg-[#6c757d] hover:duration-200'
                        }`}
                        onClick={() =>
                            handleLinkClick(LOGOUT_LINK.key, LOGOUT_LINK.path)
                        }
                    >
                        <div className='text-2xl'>{LOGOUT_LINK.icon}</div>
                        {isSidebarOpen && (
                            <span className='font-medium'>
                                {LOGOUT_LINK.label}
                            </span>
                        )}
                    </li>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
