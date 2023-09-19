import React, { useState } from 'react';
import classNames from 'classnames';

export default function Navigation() {
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <>
            <nav className="bg-gray-100">
                <div className="flex justify-between px-4">
                    <ul className="flex space-x-4 py-5 ">
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 inline text-blue-400"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                />
                            </svg>
                            <span className="font-bold">Home</span>
                        </li>
                    </ul>
                    <ul className="hidden md:flex items-center space-x-2">
                        <li className="py-5 px-3">SignIn</li>
                        <li className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
                            Cart
                        </li>
                    </ul>

                    {/* 햄버거 */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuToggle(!menuToggle)}>
                            {menuToggle ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={classNames('md:hidden', { hidden: !menuToggle })}
                >
                    <a
                        href="#"
                        className="block py-4 px-4 text-sm hover:bg-gray-200"
                    >
                        SignIn
                    </a>
                    <a
                        href="#"
                        className="block py-4 px-4 text-sm hover:bg-gray-200"
                    >
                        Cart
                    </a>
                </div>
            </nav>
        </>
    );
}
