import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { FaUserCog } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'

const AuthDashboard = ({ props, children }) => {
    return (
        <div className="flex flex-wrap justify-between w-full md:min-h-screen">
            <nav className="md:h-screen w-full md:w-[25%] md:p-5">
                <div className="navbar bg-neutral md:hidden text-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-neutral rounded-box w-52">
                                <li className="menu-title">
                                    <span>Menu</span>
                                </li>
                                <li>
                                    <Link href="/home">
                                        <AiFillHome className="h-6 w-6" />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard">
                                        <MdDashboard className="h-6 w-6" />
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard-profile">
                                        <FaUserCog className="h-6 w-6" />
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/staff">
                                        <MdDashboard className="w-6 h-6" />
                                        Staff Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/logout"
                                        as="button"
                                        method="post">
                                        <IoLogOut className="w-6 h-6" />
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <a className="btn btn-ghost normal-case text-xl">
                            Cepat Saji
                        </a>
                    </div>
                </div>
                <ul className="hidden md:menu bg-base-200 w-full p-2 rounded-box">
                    <li className="menu-title">
                        <span>Menu</span>
                    </li>
                    <li>
                        <Link href="/home">
                            <AiFillHome className="h-6 w-6" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard">
                            <MdDashboard className="h-6 w-6" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard-profile">
                            <FaUserCog className="h-6 w-6" />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="/staff">
                            <MdDashboard className="h-6 w-6" />
                            Staff Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/logout" as="button" method="post">
                            <IoLogOut className="w-6 h-6" />
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="w-full md:w-[70%]">
                {children}
                <div className="md:px-5">
                    <footer className="footer justify-items-center footer-center p-4 bg-neutral md:rounded-t-xl text-base-100">
                        <div>
                            <p>
                                Copyright © 2023 - All right reserved by Cepat
                                Saji
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default AuthDashboard
