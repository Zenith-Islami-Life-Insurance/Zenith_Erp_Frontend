import React from 'react';
import logo from '../assets/icon/jenith.png';

const Footer = () => {
    return (
        <div>
        <footer className="p-4 bg-[#5a9216] text-white shadow md:px-6 md:py-4 dark:bg-[#5a9216]">
            <span className="block text-sm bg-[#5a9216] text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://www.zenithlifebd.com/" className="hover:underline">Zenith Islami life</a>. All Rights Reserved.
            </span>
        </footer>
        </div>
    );
};

export default Footer;