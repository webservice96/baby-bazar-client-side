function MommyCorner() {
    return (
        <div className="2xl:container mx-auto mb-14 md:mb-28">
            {/* service 2 start  */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="service-right py-20 px-14 flex justify-center flex-col">
                    <div className="service-header mb-8">
                        <h2 className="text-7xl mb-8 text-blue-700 font-bold">Mommy Corner</h2>
                        <p className="text-2xl text-gray-400">Get helpful tips & advice on pregnancy, baby care, parenting, wellness and lots more!</p>
                    </div>

                    <div className="service-btn text-center mt-4">
                        <a href="/" class="bg-blue-500 font-bold text-white px-14 py-4 transition duration-300 ease-in-out hover:bg-blue-600">Read Now</a>
                    </div>
                </div>
                <div className="service-left">
                    <img src="https://cdn.shopify.com/s/files/1/0443/9159/6186/files/Screenshot_2020-09-07_at_4.14_1.jpg" alt="Not found!" />
                </div>
            </div>
            {/* service 2 end */}
        </div>
    )
}

export default MommyCorner
