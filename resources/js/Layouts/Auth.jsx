import Footer from '@/Components/Footer/Footer';
import Nav from '@/Components/Navbar/Nav';
import React from 'react';

const Auth = ({children, props}) => {
    return (
        <div className='flex flex-wrap justify-between w-full'>
            <Nav props={props} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Auth;
