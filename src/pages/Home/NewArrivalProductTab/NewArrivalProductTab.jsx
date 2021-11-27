import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './NewArrivalProductTab.css';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css';
import 'swiper/modules/navigation/navigation.min.css';

import SwiperCore, {
    Navigation
} from 'swiper';
SwiperCore.use([Navigation]);

const NewArrivalProductTab = () => {
    return (
        <div className="container mx-auto mb-14 md:mb-28">
            <Tabs>
                <h2 className="pro-tab-sec-title text-5xl">New arrivals</h2>
                <TabList>
                    <Tab>Clothing</Tab>
                    <Tab>Accessories</Tab>
                    <Tab>Baby care</Tab>
                    <Tab>Mom & beauty</Tab>
                </TabList>

                {/* tab content start */}
                <TabPanel>
                    <Swiper className="new-arrival-pro" slidesPerView={4} navigation={true} spaceBetween={20}>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6734a_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4 p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6730_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Tiny Hearts Side-snap Bamboo Bodysuit</h2>
                                    <h4 className="pro-price">$60</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6719_720x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Pinky Swear Long-sleeved Bamboo Bodysuit</h2>
                                    <h4 className="pro-price">$80</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6734a_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6745_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </TabPanel>

                {/* tab content start */}
                <TabPanel>
                    <Swiper className="new-arrival-pro" slidesPerView={4} navigation={true} spaceBetween={20}>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6734a_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4 p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6730_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Tiny Hearts Side-snap Bamboo Bodysuit</h2>
                                    <h4 className="pro-price">$60</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6719_720x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Pinky Swear Long-sleeved Bamboo Bodysuit</h2>
                                    <h4 className="pro-price">$80</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6734a_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6745_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </TabPanel>

                {/* tab content start */}
                <TabPanel>
                    <Swiper className="new-arrival-pro" slidesPerView={4} navigation={true} spaceBetween={20}>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6734a_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4 p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6730_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Tiny Hearts Side-snap Bamboo Bodysuit</h2>
                                    <h4 className="pro-price">$60</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6719_720x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Pinky Swear Long-sleeved Bamboo Bodysuit</h2>
                                    <h4 className="pro-price">$80</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6734a_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6745_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </TabPanel>

                {/* tab content start */}
                <TabPanel>
                    <Swiper className="new-arrival-pro" slidesPerView={4} navigation={true} spaceBetween={20}>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6734a_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4 p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6730_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Tiny Hearts Side-snap Bamboo Bodysuit</h2>
                                    <h4 className="pro-price">$60</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6719_720x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Pinky Swear Long-sleeved Bamboo Bodysuit</h2>
                                    <h4 className="pro-price">$80</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6734a_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-box rounded shadow-md">
                                <div className="photo-pro mb-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/products/0U2A6745_360x.jpg" alt="Not Found!" />
                                </div>
                                <div className="peoduc-content p-4">
                                    <h2 className="text-xl mb-4">Style Cracker Baby Bamboo Skirt</h2>
                                    <h4 className="pro-price">$450</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default NewArrivalProductTab;