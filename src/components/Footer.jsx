import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-base-100 text-neutral-content p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Elektropolnilnice i-+. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
