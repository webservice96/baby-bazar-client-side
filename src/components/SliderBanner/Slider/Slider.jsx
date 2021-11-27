import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <>
            <div className="grid md:grid-cols-2">
                <div className="slider-img">
                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/files/banner11.jpg" alt="Not found!" />
                </div>
                <div className="flex justify-center items-center py-8 px-28" style={{ backgroundColor: 'rgb(255, 248, 244)' }}>
                    <div className="slider-conent">
                        <h2 className="slider-title text-7xl leading-tight font-bold">Upto 50% off on Must-Have Baby Bundles!</h2>
                        <p className="text-2xl mb-10">Save big on adorable bundles for your precious ones at our Softsens Bundle of Joy SALE!</p>
                        <a href="/" className="bg-blue-500 font-bold text-white px-12 py-4 transition duration-300 ease-in-out hover:bg-blue-600">Shop Now</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;