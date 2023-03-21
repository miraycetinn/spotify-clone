import React from "react";

const NowPlayingWidget = ({ albumCover , songName , artist }) => {
    return (
        <div className="flex items-center">
            <div className="w-14 h-14">
                <img src={albumCover} alt="album cover"/>

            </div>
            <div className="flex flex-col ml-5">
                <span className="text-sm hover:underline">{songName}</span>
                <span className="text-xs text-link hover:underline">{artist}</span>
            </div>
        </div>
    );
};

export default NowPlayingWidget;
