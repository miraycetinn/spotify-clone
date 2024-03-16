import React from "react";
import UserWidget from "./UserWidget";
import { useNavigate } from "react-router-dom"
function Navbar() {

    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1); // Go back one history step
    };

    const handleForwardClick = () => {
        navigate(1); // Go forward one history step
    };
    return (
        <nav class="bg-black w-full h-16">
            <div className="flex justify-between">
                <div className="flex items-center pl-8 gap-x-4">
                    <button onClick={handleBackClick} className="bg-gray-900 w-8 h-8 opacity-90 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="m-auto w-6 h-6">
                            <path d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"/>
                        </svg>
                    </button>
                    <button onClick={handleForwardClick} className="bg-gray-900 w-8 h-8 opacity-90 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" m-auto w-6 h-6">
                            <path d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"/>
                        </svg>
                    </button>
                    <div className="bg-white rounded-full w-72 h-3/5">
                        <div className="flex pt-2">
                            <svg role="img" height="24" width="24" aria-hidden="true" fill="#000000"
                                 className="ml-2 Svg-sc-ytk21e-0 gQUQL mOLTJ2mxkzHJj6Y9_na_" viewBox="0 0 24 24" data-encore-id="icon">
                                <path
                                    d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                            </svg>
                            <input className="pl-2 text-sm" placeholder="What do you want to listen to?"/>
                        </div>

                    </div>
                </div>
                <div className="bg-black h-16 flex items-center justify-between px-6">
                <UserWidget name="Jane Doe" imageUrl="https://i.scdn.co/image/ab6775700000ee854b21de7237adb92977b25fcf" />
                </div>
            </div>
        </nav>

    )

}
export default Navbar