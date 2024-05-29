import React from 'react';

function Footer() {
    return (
        <div className="align-items-center bg-base-100">
            <footer className="footer p-10 bg-base-100 text-neutral-content container mx-auto flex flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-40">
                <nav className="flex justify-center items-center">
                    <img src="/Elektropolnilnice_White_NoBg_2010x1080.png" alt="Logo" className="h-[50px]"/>
                </nav>
                <nav className="flex justify-center items-center">
                    <img src="/um.png" alt="Logo" className="h-[50px]"/>
                </nav>
                <nav className="flex justify-center items-center">
                    <img src="/feri.png" alt="Logo" className="h-[50px]"/>
                </nav>
            </footer>
            <hr className="hr-gradient container mx-auto"/>
            <br/>
            <p className="text-center">&copy; {new Date().getFullYear()} Elektropolnilnice i-+. All rights reserved.</p>
            <br/>
        </div>
    );
}

export default Footer;
