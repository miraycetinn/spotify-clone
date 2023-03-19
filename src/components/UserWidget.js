import React from "react";

const UserWidget = ({ name , imageUrl }) => {
    return (
        <div className="flex items-center">
            <img
                className="rounded-full w-8 h-8 object-cover mr-2" src={imageUrl} alt="user profile"
            />
            <span className="text-sm font-semibold">{name}</span>
        </div>

    );
};
export default UserWidget;