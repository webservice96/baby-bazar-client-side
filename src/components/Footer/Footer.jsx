import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="site-footer bg-gray-800 py-14 text-gray-300">
                <div className="container mx-auto text-center">
                    <div className="footer-menu mb-8">
                        <ul className="flex justify-center">
                            <li className="mx-3"><Link className="text-xl" to="/#">About</Link></li>
                            <li className="mx-3"><Link className="text-xl" to="/#">Blog</Link></li>
                            <li className="mx-3"><Link className="text-xl" to="/#">Jobs</Link></li>
                            <li className="mx-3"><Link className="text-xl" to="/#">Press</Link></li>
                            <li className="mx-3"><Link className="text-xl" to="/#">Accessibility</Link></li>
                            <li className="mx-3"><Link className="text-xl" to="/#">Partners</Link></li>
                        </ul>
                    </div>
                    <div className="footer-social mb-8">
                        <ul className="flex justify-center">
                            <li className="mx-2">
                                <Link className="text-2xl" to="/#"><i className="fab fa-facebook-square"></i></Link>
                            </li>
                            <li className="mx-2">
                                <Link className="text-2xl" to="/#"><i className="fab fa-github-square"></i></Link>
                            </li>
                            <li className="mx-2">
                                <Link className="text-2xl" to="/#"><i className="fab fa-twitter-square"></i></Link>
                            </li>
                            <li className="mx-2">
                                <Link className="text-2xl" to="/#"><i className="fab fa-linkedin"></i></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <p>&copy, 2021 Workflow, All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;