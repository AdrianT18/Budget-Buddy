import {Link} from "react-router-dom";
import {useState} from "react";
import {FiHome, FiDollarSign, FiSettings, FiUser} from "react-icons/fi";
import {IoMdAnalytics} from "react-icons/io";
import {MdExitToApp} from "react-icons/md";

function Sidebar() {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const links = [
        {
            name: "Dashboard",
            icon: <FiHome className="inline-block w-5 h-5 mr-2"/>,
            to: "/",
        },
        {
            name: "Analysis",
            icon: <IoMdAnalytics className="inline-block w-5 h-5 mr-2"/>,
            to: "/analysis",
        },
        {
            name: "Account",
            icon: <FiUser className="inline-block w-5 h-5 mr-2"/>,
            to: "/account",
        },
        {
            name: "Settings",
            icon: <FiSettings className="inline-block w-5 h-5 mr-2"/>,
            to: "/settings",
        },
    ];

    const links2 = [
        {
            name: "Log In",
            icon: <MdExitToApp className="inline-block w-4 h-4 mr-2"/>,
            to: "/login",
        },
        {
            name: "Log Out",
            icon: <MdExitToApp className="inline-block w-4 h-4 mr-2"/>,
            to: "/logout",
        },
    ];

    return (
        <div className="w-64 bg-white min-h-screen flex flex-col justify-between border-r border-gray-200">
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">Budgeting Buddy</h1>
                <ul className="list-none">
                    {links.map((link, index) => (
                        <li key={index} className="mb-4">
                            <Link
                                to={link.to}
                                className={`block py-2 px-4 rounded-lg flex items-center ${
                                    activeLink === index ? "bg-indigo-500 text-white" : "text-gray-800 hover:bg-indigo-500 hover:text-white"
                                }`}
                                onClick={() => handleLinkClick(index)}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center border-t border-gray-200 py-4">
                <div className="text-l text-gray-500">
                    <Link to="/login"
                          className="block py-2 px-4 rounded-lg flex items-center text-gray-800 hover:bg-indigo-500 hover:text-white">
                        <MdExitToApp className="inline-block w-4 h-4 mr-2"/>
                        <span>Log In</span>
                    </Link>
                    <div className="text-l text-gray-500">
                        <Link to="/register"
                              className="block py-2 px-4 rounded-lg flex items-center text-gray-800 hover:bg-indigo-500 hover:text-white">
                            <MdExitToApp className="inline-block w-4 h-4 mr-2"/>
                            <span>Register</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-sm text-gray-500 px-4 py-2">
                <div className="border-t border-gray-200 py-2">{/* User profile name goes here */}Name</div>
            </div>
        </div>
    );
}

export default Sidebar;
