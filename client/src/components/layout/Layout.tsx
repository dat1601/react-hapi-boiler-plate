import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav>
                <ul className="flex w-full gap-5">
                    <li className="px-3 hover:bg-sky-700">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="px-3 hover:bg-sky-700">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <hr className="my-5"/>
            <div className="pt-5">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
