import React from "react";
import UserWidget from "./UserWidget";
function Navbar() {
    return (
        <nav class="bg-black w-full h-16">
            <div className="flex justify-between">
                <div className="flex items-center pl-8 gap-x-4">
                    <button className="bg-gray-900 w-8 h-8 opacity-90 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="m-auto w-6 h-6">
                            <path d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"/>
                        </svg>
                    </button>
                    <button className="bg-gray-900 w-8 h-8 opacity-90 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" m-auto w-6 h-6">
                            <path d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"/>
                        </svg>
                    </button>
                </div>
                <div className="bg-black h-16 flex items-center justify-between px-6">
                <UserWidget name="Jane Doe" imageUrl="https://i.scdn.co/image/ab6775700000ee854b21de7237adb92977b25fcf" />
                </div>
            </div>
        </nav>

    )

}
export default Navbar