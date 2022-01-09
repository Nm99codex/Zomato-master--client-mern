import React from 'react'

function SmallTabs() {
    return (
        <>
        <div className=" lg:hidden p-2 bg-gray-100">
            <div className="flex justify-between">
                <div className='w-20 mt-3'>
                    <img className='w-full' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt="" class="logo2" />
                </div>
                <div>
                    <select id="choice" className="p-1 m-0 rounded-md text-md font-semibold border-2 border-gray-700">
                        <option>India</option>
                        <option>Australia</option>
                        <option>China</option>
                        <option>USA</option>
                        <option>Russia</option>
                    </select>
                </div>
            </div>

            <div className="mt-2 flex justify-between text-xs">
                <div>
                    <div className="hover:underline">
                        <strong>
                            COMPANY 
                        </strong>
                    </div>
                    <div className="hover:underline">Who we are</div>
                    <div className="hover:underline">Blog</div>
                    <div className="hover:underline">Careers</div>
                    <div className="hover:underline">Report Fraud</div>
                    <div className="hover:underline">Investor Relations</div>
                </div>

                <div>
                    <div className="hover:underline">
                        <strong>
                            For foodies
                        </strong>
                    </div>
                    <div className="hover:underline">Code of Conduct</div>
                    <div className="hover:underline">Community </div>
                    <div className="hover:underline">Blogger Help</div>
                    <div className="hover:underline">Mobile Apps</div>
                </div>

                <div>
                    <div className="hover:underline">
                        <strong>
                            For Restaurants
                        </strong>
                    </div>
                    <div className="hover:underline">Add Restaurant</div>
                    <div className="hover:underline">Business App</div>
                    <div className="hover:underline">Restaurant Widgets</div>
                    <div className="hover:underline">Product for Businesses</div>
                </div>

                <div>
                    <div className="hover:underline">
                        <strong>
                            For You
                        </strong>
                    </div>
                    <div className="hover:underline">Privacy</div>
                    <div className="hover:underline">Terms</div>
                    <div className="hover:underline">Security</div>
                    <div className="hover:underline">SiteMap</div>
                </div>
            </div>
            <div className="mt-5">
                <div className = "flex justify-evenly">
                    <img src="https://nm99codex.github.io/ShapeAI-food-themed.github.io/images/applestore.PNG" alt="" class="mb-2 mr-3 w-40" />
                    <img src="https://nm99codex.github.io/ShapeAI-food-themed.github.io/images/googleplay.PNG" alt="" class="mb-2 mr-3 w-40" />
                </div>
            </div>
        </div>
    </>
    );
}

function LargeTabs() {
    return (
        <div>
            <div className="hidden lg:block p-5 bg-gray-100 pl-32 pr-32">
                <div className="flex justify-between">
                    <div className='w-28'>
                        <img className='w-full' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt="" class="logo2" />
                    </div>
                    <div>
                        <select id="choice" className="p-2 m-0 rounded-xl text-xl font-semibold border-2 border-gray-700">
                            <option>India</option>
                            <option>Australia</option>
                            <option>China</option>
                            <option>USA</option>
                            <option>Russia</option>
                        </select>
                    </div>
                </div>

                <div className="mt-2 flex justify-between">
                    <div>
                        <div className="hover:underline">
                            <strong>
                                COMPANY 
                            </strong>
                        </div>
                        <div className="hover:underline">Who we are</div>
                        <div className="hover:underline">Blog</div>
                        <div className="hover:underline">Careers</div>
                        <div className="hover:underline">Report Fraud</div>
                        <div className="hover:underline">Investor Relations</div>
                    </div>

                    <div>
                        <div className="hover:underline">
                            <strong>
                                For foodies
                            </strong>
                        </div>
                        <div className="hover:underline">Code of Conduct</div>
                        <div className="hover:underline">Community </div>
                        <div className="hover:underline">Blogger Help</div>
                        <div className="hover:underline">Mobile Apps</div>
                    </div>

                    <div>
                        <div className="hover:underline">
                            <strong>
                                For Restaurants
                            </strong>
                        </div>
                        <div className="hover:underline">Add Restaurant</div>
                        <div className="hover:underline">Business App</div>
                        <div className="hover:underline">Restaurant Widgets</div>
                        <div className="hover:underline">Product for Businesses</div>
                    </div>

                    <div>
                        <div className="hover:underline">
                            <strong>
                                For You
                            </strong>
                        </div>
                        <div className="hover:underline">Privacy</div>
                        <div className="hover:underline">Terms</div>
                        <div className="hover:underline">Security</div>
                        <div className="hover:underline">SiteMap</div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className = "flex justify-evenly">
                        <img src="https://nm99codex.github.io/ShapeAI-food-themed.github.io/images/applestore.PNG" alt="" class="mb-2 mr-3 w-40" />
                        <img src="https://nm99codex.github.io/ShapeAI-food-themed.github.io/images/googleplay.PNG" alt="" class="mb-2 mr-3 w-40" />
                    </div>
                </div>
            </div>
        </div>
    );
}


function Footer() {
    return (
        <>
            <SmallTabs />
            <LargeTabs />
        </>

    )
}

export default Footer
