import React from 'react';
import catIcon_1 from '../../../assets/cat-icon/Top_Bottom_Sets_160x.png';
import catIcon_2 from '../../../assets/cat-icon/Onesies_Rompers_160x.png';
import catIcon_3 from '../../../assets/cat-icon/Tops_Tees_160x.png';
import catIcon_4 from '../../../assets/cat-icon/Bottom_wear_160x.png';
import catIcon_5 from '../../../assets/cat-icon/Frame_2860_0badc23c-2047-43c7-a569-26d1abff1c4a_160x.png';
import catIcon_6 from '../../../assets/cat-icon/Frame_2861_160x.png';
import catIcon_7 from '../../../assets/cat-icon/Frame_2859_748abed9-f1c4-42a2-b4c3-0681355f3322_160x.png';
import catIcon_8 from '../../../assets/cat-icon/Frame_2858_7365c0c3-8cd5-4440-934f-21ea7263ebdb_160x.png';
import catIcon_9 from '../../../assets/cat-icon/Bedding_160x.png';
import catIcon_10 from '../../../assets/cat-icon/Frame_2860_160x.png';
import { Link } from 'react-router-dom';

const babycats = [
    { title: 'Top & Bottom sets', icon: catIcon_1, link: '/#' },
    { title: 'Onesies & Rompers', icon: catIcon_2, link: '/#' },
    { title: 'Tops', icon: catIcon_3, link: '/#' },
    { title: 'Bottoms', icon: catIcon_4, link: '/#' },
    { title: 'Dresses & Skirts', icon: catIcon_5, link: '/#' },
    { title: 'Bibs', icon: catIcon_6, link: '/#' },
    { title: 'Beanies & Booties', icon: catIcon_7, link: '/#' },
    { title: 'Swaddles', icon: catIcon_8, link: '/#' },
    { title: 'Bedding', icon: catIcon_9, link: '/#' },
    { title: 'Combo sets', icon: catIcon_10, link: '/#' },
];


const BabyCareCategory = () => {
    return (
        <>
            <div className="container mx-auto mb-14 md:mb-28">
                <h2 className="text-5xl mb-10">All Clothing & Accessories</h2>

                <div className="grid grid-cols-5 gap-x-4 gap-y-8">
                    {
                        babycats.map(babycat => (
                            <div className="care-cat-item" >
                                <a as={Link} href={babycat.link} className="text-center">
                                    <div className="care-cat-img">
                                        <img className="mx-auto" src={babycat.icon} alt="Not Found!" />
                                    </div>
                                    <h3 className="text-xl mt-4">{babycat.title}</h3>
                                </a>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    );
};

export default BabyCareCategory;