import React from 'react';

function User() {
    return (
        <div id="container" className="p-20 w-auto flex justify-center relative px-24">
            <div className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
                {/* Profile Image Container */}
                <div className="mr-10">
                    <div className="bg-zinc-600 rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto">
                        <img
                            className="rounded-lg w-full h-auto md:w-auto md:h-auto"
                            src="https://via.placeholder.com/150"
                            alt="User Profile"
                        />
                    </div>
                </div>
                <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
                    <h1 className="text-zinc-300 font-bold text-3xl mt-6 mb-8">
                        User ....
                    </h1>
                    <span className="loading loading-bars loading-sm"></span><p>fetching details</p>
                </div>
            </div>
        </div>
    );
}

export default User;
