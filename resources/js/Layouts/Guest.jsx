import Footer from '@/Components/Footer/Footer';
import NavGuest from '@/Components/Navbar/NavGuest';
import React from 'react';

const Guest = ({children}) => {
    return (
        <div className='flex flex-wrap w-full'>
            <NavGuest />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Guest;
