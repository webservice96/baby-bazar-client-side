import React from 'react';
import aboutFt_1 from '../../../assets/icon/about-ft-1.svg';
import aboutFt_2 from '../../../assets/icon/about-ft-2.svg';
import aboutFt_3 from '../../../assets/icon/about-ft-3.svg';
import aboutFt_4 from '../../../assets/icon/about-ft-4.svg';

const aboutFeatures = [
    {
        title: 'Safe',
        desc: 'Clinically tested in Europe & hypoallergenic',
        icon: aboutFt_1
    },
    {
        title: 'Satisfaction Guaranteed',
        desc: 'We won’t rest until you’re 100% satisfied',
        icon: aboutFt_2
    },
    {
        title: 'Performance based',
        desc: 'Effective & efficient products that do what they say.',
        icon: aboutFt_3
    },
    {
        title: 'PETA Certified Cruelty Free',
        desc: 'Never tested on animals',
        icon: aboutFt_4
    },
];

const AboutFeatured = () => {
    return (
        <>
            <div className="container mx-auto my-14 md:my-28">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* about sction start */}
                    <div className="home-about-content pr-14">
                        <h2 className="text-5xl mb-8">Why Baby Bazar</h2>
                        <p className="text-2xl text-gray-500 mb-6">We empower parents to lead their best lives by being mindful of the products they choose to use on themselves and their families. We provide a range of performance-based, safe, effective, efficient and sustainable products for your everyday needs.</p>
                        <a href="/" className="text-blue-600 text-xl uppercase font-semibold underline"> Read More</a>
                    </div>
                    {/* about feaatured start */}
                    <div className="home-about-featured">
                        <div className="grid grid-cols-2 gap-5 gap-y-11">
                            {
                                aboutFeatures.map(aboutFeature => (
                                    <div key={aboutFeature.title} className="ab-ft-box text-center flex justify-center flex-col">
                                        <div className="abft-icon mb-10">
                                            <img className="mx-auto" src={aboutFeature.icon} alt="" />
                                        </div>
                                        <h2 className="text-2xl font-medium">{aboutFeature.title}</h2>
                                        <p className="px-8 text-gray-400">{aboutFeature.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutFeatured;