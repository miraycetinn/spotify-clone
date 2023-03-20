import React from "react";

const UserWidget = ({ name , imageUrl }) => {
    return (
        <button className=" bg-gray-900 opacity-90 hover:bg-gray-700 rounded-full flex items-center">
            <img
                className="rounded-full w-8 h-8 object-cover mr-2" src={imageUrl} alt="user profile"/>
            <span className=" pr-3 text-sm font-semibold">{name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5"
                 stroke="currentColor" className=" pr-2 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>

        </button>

    );
};
export default UserWidget;