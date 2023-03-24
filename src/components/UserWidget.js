import React from "react";

const UserWidget = ({name, imageUrl}) => {
    return (

        <button
            className=" bg-gray-900 opacity-90 hover:bg-gray-700 rounded-full flex items-center">
            <img className="rounded-full w-8 h-8 object-cover mr-2" src={imageUrl} alt="user profile"/>
            <span className=" pr-3 text-sm font-semibold">{name}</span>
            <svg role="img" height="16" width="16" aria-hidden="true" fill="#FFFFFF"
                 className="pr-2 w-6 h-6 Svg-sc-ytk21e-0 gQUQL eAXFT6yvz37fvS1lmt6k" viewBox="0 0 16 16"
                 data-encore-id="icon">
                <path d="m14 6-6 6-6-6h12z"></path>
            </svg>
        </button>

    );

};
export default UserWidget;