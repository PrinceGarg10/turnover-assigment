import React from 'react';

const CustomHeader = () => {
    return (
        <header className="bg-gray-50 p-4">
            <nav className=" justify-between">
                <div className="header-username items-center mb-3">
                    <div className='flex flex-row-reverse mb-2'>
                        <div className="text-right mr-5  text-black-500">Hi, John</div>
                        <div className="text-right mr-5  text-black-500">Order & Returns</div>
                        <div className="text-right mr-5  text-black-500">Help</div>
                    </div>
                    <div className='flex justify-between ml-5'>
                        <h2 className='text-xl font-bold leading-tight tracking-tight text-black-700 md:text-2xl dark:text-white'>
                            ECOMMERCE
                        </h2>
                        <div className="header-menu">
                            <ul className="flex space-x-4">
                                <li>Categories</li>
                                <li>Sale Clearance</li>
                                <li>New stock</li>
                                <li>Trending</li>
                            </ul>
                        </div>
                        <div className="flex items-center mr-5">
                            <div className="search-cart-container">
                                <p className="pr-2">Search</p>
                            </div>
                            <p className="pr-2">Cart</p>

                        </div>
                    </div>

                </div>
                <div className='bg-gray-200 text-center p-1'>
                    &lt;&nbsp;&nbsp;&nbsp; Get 10% off on business sign up&nbsp;&nbsp;&nbsp;&gt;
                </div>
            </nav>
        </header>
    );
};

export default CustomHeader;