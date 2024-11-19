'use client'

import NavLinks from "./nav-links";
// import Link from 'next/link';
import NavIcons from "./nav-icons";
import Logo from '../../ui/logo'

function Navbar() {
    return (
        <>
            <div className="flex flex-row justify-between gap-1 h-10 p-4 pb-2 bg-slate-100 items-center">
                <div><NavLinks /></div>
                <div><Logo /></div>
                <div><NavIcons /></div>
            </div>
        </>
    );
}

export default Navbar;