import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { MdContentPasteSearch } from 'react-icons/md'
import { GrContactInfo } from 'react-icons/gr'
import { GrMapLocation } from 'react-icons/gr'
import { TbLogout2 } from 'react-icons/tb'
import { FaAirbnb } from "react-icons/fa";

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
        label: 'GIS System',
        path: '/gisSystem',
        icon: <GrMapLocation />,
    },
]

const LOGOUT_LINK = {
    key: 'auth',
    label: 'Logout',
    path: '/login',
    icon: <TbLogout2 />,
    theme: 'red',
}

const themeClasses = {
    red: 'text-red-500 hover:bg-gray-700',
}

const SideBar = () => {
    const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') || SIDE_BAR_LINKS[0].key)

    useEffect(() => {
        // Save activeLink to localStorage when it changes
        localStorage.setItem('activeLink', activeLink)
    }, [activeLink])

    const handleLinkClick = (key, path) => {
        if (key === LOGOUT_LINK.key) {
            localStorage.clear()
            navigate(LOGOUT_LINK.path)
        } else {
            setActiveLink(key)
            navigate(path) // Navigate to the clicked link's path
        }
    }

    return (
        <div className='fixed top-0 left-0 w-[16%] bg-[#320d4b] text-gray-300 min-h-screen flex flex-col justify-between'>
            <div>
                <div className='w-full flex items-center justify-start p-8 bg-[#081830] opacity-90'>
                    <h1 className='md:text-2xl wide:text-3xl xl hover:text-[#ffc404] duration-300 font-semibold pl-2'>
                        NCT Delhi 
                        <div className='text-sm flex justify-center items-center gap-2'>RouteOptiX <FaAirbnb className='text-xl'/></div>
                    </h1>
                </div>

                <nav className='p-8'>
                    <ul className='flex flex-col gap-4'>
                        {SIDE_BAR_LINKS.map((link) => (
                            <li
                                key={link.key}
                                className={`rounded-md flex gap-4 items-center p-3 cursor-pointer text-lg ${
                                    activeLink === link.key
                                        ? 'bg-[#90e1ef7e] text-[#fff]' // Active link styling
                                        : themeClasses[link.theme] ||
                                          'text-gray-300 hover:bg-[#6c757d5e] hover:duration-200'
                                }`}
                                onClick={() => handleLinkClick(link.key, link.path)}
                            >
                                <div className='hidden md:block extraWide:text-3xl'>{link.icon}</div>

                                <span className='font-medium text-sm md:text-lg extraWide:text-2xl'>
                                    {link.label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className='mb-20 ml-10 w-2/3'>
                <li
                    className={`rounded-md flex items-center gap-4 p-3 cursor-pointer text-lg ${
                        activeLink === LOGOUT_LINK.key
                            ? 'bg-[#0ea5e9] text-[#fff]' // Active link styling
                            : themeClasses[LOGOUT_LINK.theme] ||
                              'text-gray-300 hover:bg-[#6c757d] hover:duration-200'
                    }`}
                    onClick={() => handleLinkClick(LOGOUT_LINK.key, LOGOUT_LINK.path)}
                >
                    {LOGOUT_LINK.icon}

                    <span className='font-medium'>{LOGOUT_LINK.label}</span>
                </li>
            </div>
        </div>
    )
}

export default SideBar
