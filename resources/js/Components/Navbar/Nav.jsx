import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { BiUser } from 'react-icons/bi'

const Nav = ({ props }) => {
    return (
        <nav className="navbar bg-neutral text-base-100 md:rounded-b-2xl md:mx-20 md:px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                        className="menu menu-compact dropdown-content mt-5 p-2 shadow bg-neutral rounded-box w-52">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Order</a>
                        </li>
                    </ul>
                </div>
                <a className="normal-case text-xl">Cepat Saji</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="bg-base-100 rounded-3xl text-neutral">
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Order</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end mr-5 lg:mr-0">
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar placeholder bg-base-100 hover:border-base-100 group transition ease-in-out duration-700">
                        <div className="w-10 rounded-full">
                            <BiUser className="w-10 h-10 text-neutral group-hover:text-base-100" />
                        </div>
                    </label>
                    {!props.auth.user ? (
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 transition ease-in-out duration-700">
                            <li>
                                <Link href="/register">SignUp</Link>
                            </li>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 transition ease-in-out duration-700">
                            <li>
                                <Link href="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link href="/logout" as='button' method='post' >Logout</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Nav
