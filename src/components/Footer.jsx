import React from 'react';

function Footer() {
    return (
        /*<footer className="footer bg-base-100 text-neutral-content p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Elektropolnilnice i-+. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                       className="link link-hover">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                       className="link link-hover">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                       className="link link-hover">Instagram</a>
                </div>
            </div>
        </footer>*/
        <div className="align-items-center bg-base-100">
            <footer
                className="footer p-10 bg-base-100 text-neutral-content container mx-auto flex justify-center items-center space-x-40">
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
