import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const SideBar = () => {
    return (
        <div className="d-flex flex-column vh-100 w-100 bg-dark text-white p-3" style={{ width: "250px" }}>
            {/* Sidebar Header */}
            <h2 className="text-center mb-4">Hello Adriano!</h2>

            {/* Sidebar Links */}
            <ul className="nav nav-pills flex-column">
                <li className="nav-item mb-2">
                    <Link to="/expense" className="nav-link text-white"> {/* Use Link for routing */}
                        Expense & Income
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/about" className="nav-link text-white"> {/* Use Link for routing */}
                        About Me
                    </Link>
                </li>
            </ul>
        </div>
    );
};
