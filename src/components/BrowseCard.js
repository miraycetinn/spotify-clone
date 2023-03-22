import React from "react";

const BrowseCard = ({ boxTitle , boxImage }) => {
    return (
        <div className="flex justify-between flex-col hover:cursor-pointer relative overflow-hidden"
             style={{width: "213px", height: "213px", padding: "16px"}}>
            <div>{boxTitle}</div>
            <div className="flex transform rotate-12 absolute bottom-0 right-0">{boxImage}</div>
        </div>

    );

};

export default BrowseCard;