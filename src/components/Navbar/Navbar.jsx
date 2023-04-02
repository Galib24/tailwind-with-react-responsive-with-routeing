import React from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routers = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About Us", path: "/about" },
        { id: 3, name: "Contact Us", path: "/contact" },
        { id: 4, name: "Services", path: "/services" },
        { id: 5, name: "FAQ", path: "/faq" }
    ];

    return (
        <nav className='bg-purple-500 px-4'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ? 
                        
                        <XMarkIcon className="h-6 w-6 text-black" />
                            : 
                            <Bars3Icon className="h-6 w-6 text-black" />
                            
                    }
                </span>


            </div>

            <ul className={`md:flex absolute md:static duration-500 bg-purple-400 pl-8 pb-4 py-2 ${open ? 'top-6':'-top-48'}`}>
                {
                    routers.map(router => <Link
                        key={router.id}
                        router={router}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;