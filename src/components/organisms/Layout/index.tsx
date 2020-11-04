import React from 'react';
import Navbar from '../../molecules/Navbar'
import Footer from '../../molecules/Footer'

export interface LayoutProps {
    children: any;
}

const index = ({ children }: LayoutProps) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default index;