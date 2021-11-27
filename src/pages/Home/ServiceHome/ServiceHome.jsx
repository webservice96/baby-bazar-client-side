import React from 'react';
import './ServiceHome.css';
import serviceIcon_1 from '../../../assets/service-icon/service-icon-1.svg';
import serviceIcon_2 from '../../../assets/service-icon/service-icon-2.svg';
import serviceIcon_3 from '../../../assets/service-icon/service-icon-3.svg';
import serviceIcon_4 from '../../../assets/service-icon/service-icon-4.svg';
import serviceIcon_5 from '../../../assets/service-icon/service-icon-5.svg';
import serviceIcon_6 from '../../../assets/service-icon/service-icon-6.svg';
import serviceIcon_7 from '../../../assets/service-icon/service-icon-7.svg';
import serviceIcon_8 from '../../../assets/service-icon/service-icon-8.svg';
import serviceIcon_9 from '../../../assets/service-icon/service-icon-9.svg';
import serviceIcon_10 from '../../../assets/service-icon/service-icon-10.svg';
import serviceIcon_11 from '../../../assets/service-icon/service-icon-11.svg';
import serviceIcon_12 from '../../../assets/service-icon/service-icon-12.svg';

const naturalBambos = [
    { title: 'Footies, Onesies, Rompers and Bodysuits', icon: serviceIcon_1, desc: '40 Styles' },
    { title: 'Top & Bottom Sets', icon: serviceIcon_2, desc: '18 Styles' },
    { title: 'Beanies & Booties', icon: serviceIcon_3, desc: '13 Styles' },
    { title: 'Stretch Swaddles', icon: serviceIcon_4, desc: '14 Styles' },
    { title: 'Gift Sets', icon: serviceIcon_5, desc: '17 Styles' },
    { title: 'Limited Edition Collection', icon: serviceIcon_6, desc: '24 Styles' }
];

const muslinEssentials = [
    { title: 'Swaddles & Wraps', icon: serviceIcon_7, desc: '15 Styles' },
    { title: 'Bibs & Burp Cloths', icon: serviceIcon_8, desc: '22 Styles' },
    { title: 'Gift Sets', icon: serviceIcon_9, desc: '12 Styles' },
    { title: 'Sleep Bags', icon: serviceIcon_10, desc: '6 Styles' },
    { title: 'Hooded Towels', icon: serviceIcon_11, desc: '6 Styles' },
    { title: 'Blankets', icon: serviceIcon_12, desc: '6 Styles' },
]

const ServiceHome = () => {
    return (
        <>
            <div className="2xl:container mx-auto mb-14 md:mb-28">
                {/* service 1 start  */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="service-left">
                        <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/files/image_25.jpg" alt="Not found!" />
                    </div>
                    <div className="service-right py-20 px-14 flex justify-center flex-col">
                        <div className="service-header">
                            <h2 className="text-7xl mb-8 text-blue-700 font-bold">Natural Bamboo Basics</h2>
                            <p className="text-2xl text-gray-400">Soft-as-a-cloud, thermo-regulating & naturally antibacterial bamboo essentials that feel as amazing as they look.</p>
                        </div>
                        <div className="service-container mt-10 mb-14">
                            <div class="grid grid-cols-2 gap-4">

                                {
                                    naturalBambos.map(naturalBambo => (
                                        <div key={naturalBambo.title} className="service-box flex">
                                            <div className="service-icon w-20">
                                                <img src={naturalBambo.icon} alt="Not found!" />
                                            </div>
                                            <div className="service-text pl-2.5">
                                                <h3 className="text-xl font-medium">{naturalBambo.title}</h3>
                                                <span>{naturalBambo.desc}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="service-btn text-center">
                            <a href="/" class="bg-blue-500 font-bold text-white px-14 py-4 transition duration-300 ease-in-out hover:bg-blue-600">View All</a>
                        </div>
                    </div>
                </div>
                {/* service 1 end */}

                {/* service 2 start  */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="service-right service-2-bg py-20 px-14 flex justify-center flex-col">
                        <div className="service-header">
                            <h2 className="text-7xl mb-8 text-blue-700 font-bold">Muslin Essentials</h2>
                            <p className="text-2xl text-gray-400">The softest & coziest baby must-haves, specially designed for your little one's sensitive skin.</p>
                        </div>
                        <div className="service-container mt-10 mb-14">
                            <div class="grid grid-cols-2 gap-4">

                                {
                                    muslinEssentials.map(muslinEssential => (
                                        <div key={muslinEssential.title} className="service-box flex">
                                            <div className="service-icon w-20">
                                                <img src={muslinEssential.icon} alt="Not found!" />
                                            </div>
                                            <div className="service-text pl-2.5">
                                                <h3 className="text-xl font-medium">{muslinEssential.title}</h3>
                                                <span>{muslinEssential.desc}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="service-btn text-center">
                            <a href="/" class="bg-blue-500 font-bold text-white px-14 py-4 transition duration-300 ease-in-out hover:bg-blue-600">View All</a>
                        </div>
                    </div>
                    <div className="service-left">
                        <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/files/softsens_muslin.jpg" alt="Not found!" />
                    </div>
                </div>
                {/* service 2 end */}
            </div>
        </>
    );
};

export default ServiceHome;